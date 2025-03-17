'use strict';

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'parent',
    title: '親メニュー'
  });
  chrome.contextMenus.create({
    id: 'child1',
    parentId: 'parent',
    title: '子メニュー1'
  });
  chrome.contextMenus.create({
    id: 'child2',
    parentId: 'parent',
    title: '子メニュー2'
  });
  chrome.contextMenus.create({
    id: 'grandchild1',
    parentId: 'child1',
    title: '孫メニュー1'
  });
});

// メニューをクリック時に実行
chrome.contextMenus.onClicked.addListener(item => {
  console.log(item);
  console.log(item.menuItemId);
});