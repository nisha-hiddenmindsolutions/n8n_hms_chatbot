(function () {
  'use strict';

  const CONFIG = {
    webhookUrl: "https://n8n.propwiseai.in/webhook/hms-chat/chat",
    companyName: "Hidden Mind Solutions",
    initialMessage: "Hello! 👋 I am the official AI Assistant for **Hidden Mind Solutions**. How can I help you today? Ask me about our AI services, past projects, leadership, or hiring dedicated developers."
  };

  const HMS_LOGO_BASE64 = "data:image/png;base64,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";

  function getSessionId() {
    let sid = localStorage.getItem("hms_session_id");
    if (!sid) {
      sid = "hms_" + Math.random().toString(36).substring(2, 10) + "_" + Date.now();
      localStorage.setItem("hms_session_id", sid);
    }
    return sid;
  }

  function parseMarkdown(text) {
    if (!text) return "";
    let html = text
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      // 1. Convert markdown formatted links [Label](url)
      .replace(/\[(.*?)\]\((https?:\/\/[^\s\)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      // 2. Autolink raw URLs (e.g. https://hiddenmindsolutions.in/#contact)
      .replace(/(^|[^"'>])(https?:\/\/[^\s<]+[^\s<.,:;"')\]])/g, '$1<a href="$2" target="_blank" rel="noopener noreferrer">$2</a>')
      .replace(/^[\*\-]\s+(.*)$/gm, '<li>$1</li>');

    // Group li items cleanly into ul and remove extra internal line breaks
    html = html.replace(/((?:<li>.*?<\/li>\s*)+)/g, function(match) {
      const cleanList = match.replace(/[\r\n]+/g, '').trim();
      return '<ul>' + cleanList + '</ul>';
    });

    // Replace multiple empty line breaks with a compact 8px spacer
    html = html.replace(/(\r?\n){2,}/g, '<div class="hms-spacer"></div>');
    html = html.replace(/\r?\n/g, '<br>');
    return html;
  }

  const styleEl = document.createElement("style");
  styleEl.textContent = `
    #hms-widget-root {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999999;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    }
    #hms-widget-root * { box-sizing: border-box; }

    /* Downside Toggle Button (Circular with Chat/Bot Logo) */
    .hms-toggle {
      width: 58px;
      height: 58px;
      background: #000000;
      border: 2px solid rgba(255, 255, 255, 0.18);
      border-radius: 50%;
      color: #ffffff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.45);
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      margin-top: 14px;
      position: relative;
    }
    .hms-toggle:hover {
      transform: scale(1.06);
      background: #18181b;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.5);
    }
    .hms-toggle svg {
      transition: transform 0.2s ease;
    }
    .hms-toggle-pulse {
      position: absolute;
      top: 1px;
      right: 1px;
      width: 13px;
      height: 13px;
      background: #10b981;
      border: 2px solid #000000;
      border-radius: 50%;
    }

    .hms-window {
      width: 380px;
      height: 580px;
      max-height: calc(100vh - 100px);
      background: #ecebe8;
      border-radius: 20px;
      box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(0, 0, 0, 0.08);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      transform-origin: bottom right;
    }
    .hms-window.is-closed {
      opacity: 0;
      transform: scale(0.92) translateY(20px);
      pointer-events: none;
      display: none;
    }

    .hms-header {
      background: #000000;
      color: #ffffff;
      padding: 14px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }
    .hms-header-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    /* Official 'hms' CIRCULAR Logo Badge */
    .hms-header-logo-badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
      border-radius: 50%;
      width: 28px;
      height: 28px;
      flex-shrink: 0;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
    }
    .hms-logo-text {
      color: #000000;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-weight: 800;
      font-size: 11.5px;
      letter-spacing: -0.4px;
      line-height: 1;
      display: block;
    }
    .hms-header-title {
      font-size: 15px;
      font-weight: 700;
      letter-spacing: -0.2px;
      color: #ffffff;
    }
    .hms-header-actions {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .hms-header-btn {
      background: transparent;
      border: none;
      color: #a1a1aa;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 17px;
      line-height: 1;
      padding: 4px;
      transition: color 0.15s, transform 0.15s;
    }
    .hms-header-btn:hover {
      color: #ffffff;
      transform: scale(1.1);
    }

    .hms-body {
      flex: 1;
      padding: 18px 16px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 16px;
      background: #ecebe8;
      scrollbar-width: thin;
      scrollbar-color: #cbd5e1 transparent;
    }
    .hms-body::-webkit-scrollbar { width: 6px; }
    .hms-body::-webkit-scrollbar-thumb {
      background-color: #cbd5e1;
      border-radius: 4px;
    }

    .hms-msg-row {
      display: flex;
      gap: 10px;
      width: 100%;
      align-items: flex-start;
    }
    .hms-msg-row.is-user { justify-content: flex-end; }
    .hms-msg-row.is-bot { justify-content: flex-start; }

    .hms-bot-avatar {
      width: 26px;
      height: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-top: 6px;
    }
    .hms-bot-avatar svg {
      width: 24px;
      height: 24px;
      fill: #000000;
    }

    .hms-bubble-bot {
      max-width: 82%;
      background: #ffffff;
      color: #18181b;
      padding: 15px 18px;
      border-radius: 16px;
      font-size: 14px;
      line-height: 1.6;
      word-break: break-word;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
      border: 1px solid rgba(0, 0, 0, 0.04);
    }

    /* USER MESSAGE BUBBLE: WHITE BACKGROUND + BLACK TEXT */
    .hms-bubble-user {
      max-width: 80%;
      background: #ffffff;
      color: #000000;
      padding: 11px 18px;
      border-radius: 14px;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: -0.1px;
      line-height: 1.45;
      word-break: break-word;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
      border: 1px solid rgba(0, 0, 0, 0.06);
    }

    .hms-spacer {
      height: 8px;
    }
    .hms-bubble-bot a { color: #0284c7; text-decoration: underline; font-weight: 600; }
    .hms-bubble-bot ul {
      margin: 6px 0 6px 18px;
      padding: 0;
    }
    .hms-bubble-bot li {
      margin-bottom: 4px;
      line-height: 1.45;
    }

    .hms-typing {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 12px 16px;
      background: #ffffff;
      border-radius: 16px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
    }
    .hms-dot {
      width: 6px;
      height: 6px;
      background: #71717a;
      border-radius: 50%;
      animation: hms-bounce 1.4s infinite ease-in-out both;
    }
    .hms-dot:nth-child(1) { animation-delay: -0.32s; }
    .hms-dot:nth-child(2) { animation-delay: -0.16s; }
    @keyframes hms-bounce {
      0%, 80%, 100% { transform: scale(0); }
      40% { transform: scale(1); }
    }

    .hms-footer {
      padding: 14px 16px 14px;
      background: #ecebe8;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .hms-input-pill {
      background: #ffffff;
      border-radius: 28px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
      border: 1.5px solid #e2e8f0;
      padding: 5px 8px 5px 20px;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: box-shadow 0.2s, border-color 0.2s;
    }
    .hms-input-pill:focus-within {
      border-color: #94a3b8;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
    }
    .hms-input-pill input {
      flex: 1;
      border: none;
      background: transparent;
      outline: none;
      font-size: 13.5px;
      color: #18181b;
      padding: 9px 0;
    }
    .hms-input-pill input::placeholder { color: #94a3b8; }

    .hms-send-btn {
      width: 36px;
      height: 36px;
      background: #c5d3e0;
      border: none;
      border-radius: 50%;
      cursor: not-allowed;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: background 0.15s, transform 0.15s;
    }
    .hms-send-btn:not(:disabled) {
      background: #000000;
      cursor: pointer;
    }
    .hms-send-btn:not(:disabled):hover {
      background: #27272a;
      transform: scale(1.05);
    }
    .hms-send-btn svg {
      width: 17px;
      height: 17px;
      fill: #ffffff;
      margin-left: 2px;
    }

    .hms-branding {
      text-align: center;
      font-size: 12px;
      color: #71717a;
    }
    .hms-branding strong {
      color: #18181b;
      font-weight: 600;
    }
  `;
  document.head.appendChild(styleEl);

  const container = document.createElement("div");
  container.id = "hms-widget-root";
  container.innerHTML = `
    <div class="hms-window" id="hms-window">
      <div class="hms-header">
        <div class="hms-header-left">
          <div class="hms-header-logo-badge" title="${CONFIG.companyName}">
            <span class="hms-logo-text">hms</span>
          </div>
          <span class="hms-header-title">${CONFIG.companyName}</span>
        </div>
        <div class="hms-header-actions">
          <button class="hms-header-btn" id="hms-restart-btn" title="Reset Conversation">↺</button>
          <button class="hms-header-btn" id="hms-close-btn" title="Close Window">✕</button>
        </div>
      </div>
      <div class="hms-body" id="hms-body">
        <div class="hms-msg-row is-bot">
          <div class="hms-bot-avatar">
            <svg viewBox="0 0 24 24">
              <rect x="5" y="7" width="14" height="12" rx="3" />
              <circle cx="9" cy="12" r="1.4" fill="#ffffff" />
              <circle cx="15" cy="12" r="1.4" fill="#ffffff" />
              <line x1="12" y1="3" x2="12" y2="7" stroke="#000000" stroke-width="2" stroke-linecap="round" />
              <circle cx="12" cy="3" r="1.5" />
              <rect x="2" y="10" width="3" height="6" rx="1" />
              <rect x="19" y="10" width="3" height="6" rx="1" />
            </svg>
          </div>
          <div class="hms-bubble-bot">${parseMarkdown(CONFIG.initialMessage)}</div>
        </div>
      </div>
      <div class="hms-footer">
        <form class="hms-input-pill" id="hms-chat-form">
          <input type="text" id="hms-input" placeholder="Ask about services, hiring, team..." autocomplete="off" />
          <button type="submit" class="hms-send-btn" id="hms-send-btn" disabled>
            <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </button>
        </form>
        <div class="hms-branding">Powered by <strong>${CONFIG.companyName} AI</strong></div>
      </div>
    </div>
    <button class="hms-toggle" id="hms-toggle-btn" aria-label="Toggle Chat">
      <span class="hms-toggle-pulse"></span>
      <span id="hms-toggle-icon">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </span>
    </button>
  `;
  document.body.appendChild(container);

  const windowEl = document.getElementById("hms-window");
  const toggleBtn = document.getElementById("hms-toggle-btn");
  const toggleIcon = document.getElementById("hms-toggle-icon");
  const closeBtn = document.getElementById("hms-close-btn");
  const restartBtn = document.getElementById("hms-restart-btn");
  const bodyEl = document.getElementById("hms-body");
  const formEl = document.getElementById("hms-chat-form");
  const inputEl = document.getElementById("hms-input");
  const sendBtn = document.getElementById("hms-send-btn");

  let isOpen = true;
  let isSending = false;

  const ICON_CHAT = `
    <svg viewBox="0 0 24 24" width="26" height="26">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="#ffffff"/>
      <circle cx="8" cy="11" r="1.5" fill="#000000"/>
      <circle cx="12" cy="11" r="1.5" fill="#000000"/>
      <circle cx="16" cy="11" r="1.5" fill="#000000"/>
    </svg>
  `;
  const ICON_DOWN = `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 9l6 6 6-6"/>
    </svg>
  `;

  function setOpen(open) {
    isOpen = open;
    if (isOpen) {
      windowEl.classList.remove("is-closed");
      toggleIcon.innerHTML = ICON_DOWN;
      inputEl.focus();
      bodyEl.scrollTop = bodyEl.scrollHeight;
    } else {
      windowEl.classList.add("is-closed");
      toggleIcon.innerHTML = ICON_CHAT;
    }
  }

  toggleBtn.addEventListener("click", () => setOpen(!isOpen));
  closeBtn.addEventListener("click", () => setOpen(false));

  inputEl.addEventListener("input", () => {
    sendBtn.disabled = !inputEl.value.trim() || isSending;
  });

  function scrollToBottom() {
    bodyEl.scrollTop = bodyEl.scrollHeight;
  }

  function appendUserMessage(text) {
    const row = document.createElement("div");
    row.className = "hms-msg-row is-user";
    row.innerHTML = `<div class="hms-bubble-user">${text.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>`;
    bodyEl.appendChild(row);
    scrollToBottom();
  }

  function appendBotMessage(text) {
    const row = document.createElement("div");
    row.className = "hms-msg-row is-bot";
    row.innerHTML = `
      <div class="hms-bot-avatar">
        <svg viewBox="0 0 24 24">
          <rect x="5" y="7" width="14" height="12" rx="3" />
          <circle cx="9" cy="12" r="1.4" fill="#ffffff" />
          <circle cx="15" cy="12" r="1.4" fill="#ffffff" />
          <line x1="12" y1="3" x2="12" y2="7" stroke="#000000" stroke-width="2" stroke-linecap="round" />
          <circle cx="12" cy="3" r="1.5" />
          <rect x="2" y="10" width="3" height="6" rx="1" />
          <rect x="19" y="10" width="3" height="6" rx="1" />
        </svg>
      </div>
      <div class="hms-bubble-bot">${parseMarkdown(text)}</div>
    `;
    bodyEl.appendChild(row);
    scrollToBottom();
  }

  function showTyping() {
    const row = document.createElement("div");
    row.className = "hms-msg-row is-bot";
    row.id = "hms-typing";
    row.innerHTML = `
      <div class="hms-bot-avatar">
        <svg viewBox="0 0 24 24">
          <rect x="5" y="7" width="14" height="12" rx="3" />
          <circle cx="9" cy="12" r="1.4" fill="#ffffff" />
          <circle cx="15" cy="12" r="1.4" fill="#ffffff" />
          <line x1="12" y1="3" x2="12" y2="7" stroke="#000000" stroke-width="2" stroke-linecap="round" />
          <circle cx="12" cy="3" r="1.5" />
          <rect x="2" y="10" width="3" height="6" rx="1" />
          <rect x="19" y="10" width="3" height="6" rx="1" />
        </svg>
      </div>
      <div class="hms-typing">
        <span class="hms-dot"></span>
        <span class="hms-dot"></span>
        <span class="hms-dot"></span>
      </div>
    `;
    bodyEl.appendChild(row);
    scrollToBottom();
  }

  function hideTyping() {
    const el = document.getElementById("hms-typing");
    if (el) el.remove();
  }

  async function sendMessage(text) {
    if (!text || isSending) return;
    appendUserMessage(text);
    inputEl.value = "";
    sendBtn.disabled = true;
    isSending = true;
    showTyping();

    try {
      const res = await fetch(CONFIG.webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "sendMessage",
          chatInput: text,
          sessionId: getSessionId()
        })
      });

      hideTyping();
      if (!res.ok) throw new Error("HTTP " + res.status);

      const data = await res.json();
      const reply = data.output || "I have received your message.";
      appendBotMessage(reply);
    } catch (err) {
      hideTyping();
      console.error(err);
      appendBotMessage("⚠️ Could not reach the server. Please check your connection or try again.");
    } finally {
      isSending = false;
      inputEl.disabled = false;
      inputEl.focus();
    }
  }

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    sendMessage(inputEl.value.trim());
  });

  restartBtn.addEventListener("click", () => {
    if (confirm("Reset conversation and start fresh?")) {
      localStorage.removeItem("hms_session_id");
      bodyEl.innerHTML = `
        <div class="hms-msg-row is-bot">
          <div class="hms-bot-avatar">
            <svg viewBox="0 0 24 24">
              <rect x="5" y="7" width="14" height="12" rx="3" />
              <circle cx="9" cy="12" r="1.4" fill="#ffffff" />
              <circle cx="15" cy="12" r="1.4" fill="#ffffff" />
              <line x1="12" y1="3" x2="12" y2="7" stroke="#000000" stroke-width="2" stroke-linecap="round" />
              <circle cx="12" cy="3" r="1.5" />
              <rect x="2" y="10" width="3" height="6" rx="1" />
              <rect x="19" y="10" width="3" height="6" rx="1" />
            </svg>
          </div>
          <div class="hms-bubble-bot">${parseMarkdown(CONFIG.initialMessage)}</div>
        </div>
      `;
    }
  });

})();
