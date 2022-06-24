import { Header } from "../components/Header";
import { Sidebar } from "../components/SiderBar";

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        
        <div className="flex-1">Login</div>
        <Sidebar />
      </main>
    </div>
    
  )
}
