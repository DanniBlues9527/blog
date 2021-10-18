import React from "react";

function Navigation(props) {
  function getMenuList(content) {
    const issues = content;
    const menu = [];
    const patt = /(#+)\s+?(.+)/g;
    let result = null;
    while ((result = patt.exec(issues))) {
      menu.push({ level: result[1].length, title: result[2] });
    }
    const menuObj = [];
    let level2Temp = null;
    let level3Temp = null;
    let level4Temp = null;
    for (let i = 0; i < menu.length; i += 1) {
      if (menu[i].level === 2) {
        level2Temp = {
          id: i,
          level: 2,
          title: menu[i].title,
          children: [],
        };
        menuObj.push(level2Temp);
      } else if (menu[i].level === 3) {
        level3Temp = {
          id: i,
          level: 3,
          title: menu[i].title,
          children: [],
        };
        level2Temp.children.push(level3Temp);
      } else if (menu[i].level === 4) {
        level4Temp = {
          id: i,
          level: 4,
          title: menu[i].title,
        };
        level3Temp.children.push(level4Temp);
      }
    }
    return menuObj.map((level2) => (
      <li key={level2.id} onClick={() => anchor(level2.title)}>
        {level2.title}
        <ul>
          {level2.children.map((level3) => (
            <li key={level3.id} onClick={() => anchor(level3.title)}>
              {level3.title}
              <ul>
                {level3.children.map((level4) => (
                  <li key={level4.id} onClick={() => anchor(level4.title)}>
                    {level4.title}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li>
    ));
  }

  function anchor(id) {
    document.body.scroll(
      0,
      document.getElementById(id.toLowerCase()).offsetTop
    );
  }

  const menuList = getMenuList(props.content);

  return (
    <div className="rightsider">
      <div className="rightsider-card article-navightion">
        <div className="rightsider-card-title">目录</div>
        <div className="article-navigation-content">
          <ul>{menuList}</ul>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
