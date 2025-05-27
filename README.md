# Developer-Tools-Blocking-Script

# 🔐 Developer Tools Blocking Script Demo

This project demonstrates how JavaScript can be used to detect and block access to browser developer tools, such as disabling:
- Right-click menu
- Common keyboard shortcuts like F12, Ctrl+Shift+I/J, and Ctrl+U
- Developer tools via window size or console object detection

## 🚀 Live Demo
Check out the live demo here: [https://yourusername.github.io/devtools-blocking-demo](https://yourusername.github.io/devtools-blocking-demo)

## 📜 Features
- 🚫Prevents context menu (right-click)
- 🛑Blocks access via keyboard shortcuts
- 🕵️‍♂️Detects dev tools using:
  - `console.log` behavior
  - `window.innerWidth` vs `outerWidth` differences
- 🚨Redirects users to a blank page if dev tools are detected

## ⚠️ Important Note
These methods are **not foolproof** and can be bypassed by experienced users. They may also:
- Degrade user experience
- Interfere with browser accessibility tools
- Block legitimate debugging or inspection
- Erode user trust if used aggressively

Use responsibly and only when truly necessary.

## 📁 Project Structure
