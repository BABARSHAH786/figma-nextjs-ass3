import Navbar from '../app/components/Navbar';
import Sectiontop from "./components/Sectiontop";
import WorkManagement from "./components/Workmanagement";
import Costomize from "./components/Costomize";
import Work from "./components/Work";
import Sponsor from "./components/Sponsor";
import Footer from "./components/Footer";
import Extension from "./components/Extension";



export default function Home() {
  return (
    <div className="bg-[#043873] ">
      
        
        <Navbar />
        <Sectiontop />
        <WorkManagement />
        <Extension />
        <Costomize />

        <Work />
        
        <Sponsor />
        
        <Footer />
           </div>
  );
}
