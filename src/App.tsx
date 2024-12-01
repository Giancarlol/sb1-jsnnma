import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { SavingsHero } from '@/components/savings/SavingsHero';
import { RecommendedProducts } from '@/components/savings/RecommendedProducts';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <SavingsHero />
          <RecommendedProducts />
        </main>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;