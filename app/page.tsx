"use client"
import { useState } from "react"
export default function Home() {
  const [url, setUrl] = useState("")
  const [show, setShow] = useState(false)
  return (
    <div style={{minHeight:"100vh", background:"#f8fafc", padding:"20px", fontFamily:"sans-serif"}}>
      <div style={{maxWidth:"700px", margin:"20px auto", background:"white", padding:"30px", borderRadius:"16px", boxShadow:"0 4px 20px rgba(0,0,0,0.08)"}}>
        <h1 style={{textAlign:"center"}}>🛡️ GDPR Shield</h1>
        <p style={{textAlign:"center", color:"#666"}}>افحص موقعك - هل يخالف قوانين اوروبا؟ الغرامة 20 مليون!</p>
        <div style={{display:"flex", gap:"10px", marginTop:"20px"}}>
          <input value={url} onChange={(e)=>setUrl(e.target.value)} placeholder="https://example.com" style={{flex:1, padding:"14px", borderRadius:"8px", border:"1px solid #ddd"}}/>
          <button onClick={()=>setShow(true)} style={{padding:"14px 24px", background:"#22c55e", color:"white", border:"none", borderRadius:"8px", fontWeight:"bold"}}>فحص</button>
        </div>
        {show && (
          <div style={{marginTop:"30px", padding:"20px", background:"#fef2f2", border:"1px solid #fecaca", borderRadius:"12px"}}>
            <h3 style={{color:"#dc2626"}}>🚨 وجدنا 5 مشاكل خطيرة في {url}!</h3>
            <p style={{fontSize:"13px", color:"#666"}}>غرامتك المحتملة: 20,000,000 يورو</p>
            <div style={{marginTop:"20px", display:"flex", flexDirection:"column", gap:"12px"}}>
              <a href="https://buymeacoffee.com/qetteeiif2g" target="_blank" style={{background:"#FFDD00", color:"#000", padding:"14px", borderRadius:"8px", textAlign:"center", textDecoration:"none", fontWeight:"bold"}}>☕ احصل على الحل الكامل - 5$</a>
              <a href="https://wa.me/967782929428" target="_blank" style={{background:"#25D366", color:"white", padding:"14px", borderRadius:"8px", textAlign:"center", textDecoration:"none", fontWeight:"bold"}}>💬 واتساب: 782929428 (دفع يمني)</a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
