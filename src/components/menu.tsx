/*
 * @Date: 2021-01-30 20:08:59
 * @LastEditors: wpp
 * @LastEditTime: 2021-01-30 21:35:00
 * @FilePath: \text\src\components\menu.tsx
 */
import { Component, Vue, Prop } from "vue-property-decorator";
import { RouteConfig } from "vue-router";

@Component
export default class Menu extends Vue {
  @Prop({
    default: () => {
      return [
        {
          path: "/",
          name: "home",
          children: [
            {
              path: "/homeChild",
              name: "homeChild",
              children: [{ path: "/homeChildChild", name: "homeChildChild" }]
            }
          ]
        },
        { path: "/about", name: "about" }
      ];
    }
  })
  private baseData!: Array<RouteConfig>;
  render() {
    const setMenuItem = function(obj: RouteConfig) {
      return <a-menu-item key={obj.path}>{obj?.name}</a-menu-item>;
    };
    const setSubMenu = function(obj: RouteConfig) {
      return (
        <a-sub-menu key={obj.path} title={obj?.name}>
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
      <a-menu default-selected-keys={["5"]} mode="inline">
        {this.baseData.map((obj: RouteConfig) => {
          return obj.children && obj.children[0]
            ? setSubMenu(obj)
            : setMenuItem(obj);
        })}
      </a-menu>
      // <a-menu default-selected-keys={["5"]} mode="inline">
      //   <a-sub-menu key="sub2" title="Navigation Two">
      //     <a-menu-item key="5">Option 5</a-menu-item>
      //     <a-menu-item key="6">Option 6</a-menu-item>
      //     <a-sub-menu key="sub3" title="Submenu">
      //       <a-menu-item key="7">Option 7</a-menu-item>
      //       <a-menu-item key="8">Option 8</a-menu-item>
      //     </a-sub-menu>
      //   </a-sub-menu>
      // </a-menu>
    );
  }
}
