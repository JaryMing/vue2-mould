/*
 * @Date: 2021-01-30 20:08:59
 * @LastEditors: wpp
 * @LastEditTime: 2021-01-31 22:22:33
 * @FilePath: \text\src\components\menu.tsx
 */
import { Component, Vue, Prop } from "vue-property-decorator";
import { RouteConfig } from "vue-router";

@Component
export default class Menu extends Vue {
  @Prop({
    default: () => {
      return [];
    }
  })
  private baseData!: Array<RouteConfig>;

  // http://192.168.0.104:8080/test/homeChild/homeChildChild
  private defaultOpenKeys: Array<string> = [];

  private defaultSelectedKeys: Array<string> = [];

  private created() {
    const publicPath = process.env.VUE_APP_PUBLICPATH;
    let pathName = window.location.pathname;
    pathName = window.location.pathname.replace(publicPath, "");
    // 设置默认选中项
    this.defaultSelectedKeys = [pathName];
    // 设置默认打开项
    const pathArr = pathName.split("/");

    if (pathArr.length > 2) {
      // 防止只有一级菜单时 会将 key = "/" 的层级打开 (临时这么解决)
      pathArr.forEach((item: string) => {
        this.defaultOpenKeys.push(`/${item}`);
      });
    }
  }

  private handleMenuItemFn(obj: {
    item: string;
    key: string;
    keyPath: string;
  }) {
    console.log(obj);
    this.$router.push(obj.key);
  }

  render() {
    const setMenuItem = function(obj: RouteConfig) {
      return (
        <a-menu-item key={obj?.meta.pathKey}>{obj?.meta.text}</a-menu-item>
      );
    };
    const setSubMenu = function(obj: RouteConfig) {
      return (
        <a-sub-menu key={obj?.meta.pathKey} title={obj?.meta.text}>
          {obj.children && obj.children[0]
            ? obj.children.map((childObj: RouteConfig) => {
                return childObj.children && childObj.children[0]
                  ? setSubMenu(childObj)
                  : setMenuItem(childObj);
              })
            : setMenuItem(obj)}
        </a-sub-menu>
      );
    };
    return (
      <a-menu
        default-selected-keys={this.defaultSelectedKeys}
        defaultOpenKeys={this.defaultOpenKeys}
        mode="inline"
        theme="dark"
        onClick={this.handleMenuItemFn}
      >
        {this.baseData.map((obj: RouteConfig) => {
          return obj.children && obj.children[0]
            ? setSubMenu(obj)
            : setMenuItem(obj);
        })}
      </a-menu>
    );
  }
}
