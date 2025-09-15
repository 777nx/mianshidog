import React from "react";
import "./index.css";

/**
 * 全局底部栏组件
 * @constructor
 */
export default function GlobalFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="global-footer">
      <div>© {currentYear} 面试刷题平台</div>
      <div>
        <a href="https://www.777nx.cn" target="_blank">
          作者：贝果研究家 - 程序员阿符
        </a>
      </div>
    </div>
  );
}
