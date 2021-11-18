import React from 'react'

const Aside = (props) => {
  const { children, className } = props
  return (
    <div style={{
      padding: "3em",
      width: "100%",
      background: "papayawhip",
      position: "relative",  
      box-sizing: "border-box",
    }}>
      <svg width="100%" height="100%" style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
      }}>
        <pattern id="pattern-hex" x="0" y="0" width="22.4" height="38" patternUnits="userSpaceOnUse" viewBox="30 -254 50 190">
          <g id="hexagon" fill="salmon">
            <path d="M168-127.1c0.5,0,1,0.1,1.3,0.3l53.4,30.5c0.7,0.4,1.3,1.4,1.3,2.2v61c0,0.8-0.6,1.8-1.3,2.2L169.3-0.3 c-0.7,0.4-1.9,0.4-2.6,0l-53.4-30.5c-0.7-0.4-1.3-1.4-1.3-2.2v-61c0-0.8,0.6-1.8,1.3-2.2l53.4-30.5C167-127,167.5-127.1,168-127.1 L168-127.1z"></path>
            <path d="M112-222.5c0.5,0,1,0.1,1.3,0.3l53.4,30.5c0.7,0.4,1.3,1.4,1.3,2.2v61c0,0.8-0.6,1.8-1.3,2.2l-53.4,30.5 c-0.7,0.4-1.9,0.4-2.6,0l-53.4-30.5c-0.7-0.4-1.3-1.4-1.3-2.2v-61c0-0.8,0.6-1.8,1.3-2.2l53.4-30.5 C111-222.4,111.5-222.5,112-222.5L112-222.5z"></path>
            <path d="M168-317.8c0.5,0,1,0.1,1.3,0.3l53.4,30.5c0.7,0.4,1.3,1.4,1.3,2.2v61c0,0.8-0.6,1.8-1.3,2.2L169.3-191 c-0.7,0.4-1.9,0.4-2.6,0l-53.4-30.5c-0.7-0.4-1.3-1.4-1.3-2.2v-61c0-0.8,0.6-1.8,1.3-2.2l53.4-30.5 C167-317.7,167.5-317.8,168-317.8L168-317.8z"></path>
          </g>
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-hex)"></rect>
      </svg>

      <aside className={className} style={{
        position: "relative",
        padding: "1em 1.6em",
        boxShadow: "0 0 0.5em 0.1em rgba(0,0,0,0.2)",
        borderRadius: "0.5em",
        backgroundColor: "#fff",
        fontFamily: "monospace",
        zIndex: 20,
      }}>
        {children}
      </aside>
    </div>
  )
}

export default Aside
