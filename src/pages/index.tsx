import { Header } from "../components/Header";
import { Sidebar } from "../components/SiderBar";
import { Video } from "../components/Video";

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <Video />
        <Sidebar />
      </main>
    </div>
    
  )
}
