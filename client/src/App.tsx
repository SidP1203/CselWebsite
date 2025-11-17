import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Helmet } from "react-helmet";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import AboutPage from "@/pages/about";
import DonatePage from "@/pages/donate";
import DonateSuccessPage from "@/pages/donate/success";
import ProgramsPage from "@/pages/programs";
import SchoolProgramsPage from "@/pages/programs/school-programs";
import CommunityAffiliationsPage from "@/pages/programs/community-affiliations";
import ResearchResultsPage from "@/pages/programs/research-results";
import SuccessStoriesPage from "@/pages/programs/success-stories";
import ResourcesPage from "@/pages/programs/resources";
import NewsEventsPage from "@/pages/programs/news-events";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/utils/ScrollToTop";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/about" component={AboutPage}/>
      <Route path="/donate" component={DonatePage}/>
      <Route path="/donate/success" component={DonateSuccessPage}/>
      <Route path="/programs" component={ProgramsPage}/>
      <Route path="/programs/school" component={SchoolProgramsPage}/>
      <Route path="/programs/community" component={CommunityAffiliationsPage}/>
      <Route path="/programs/research" component={ResearchResultsPage}/>
      <Route path="/programs/success-stories" component={SuccessStoriesPage}/>
      <Route path="/programs/resources" component={ResourcesPage}/>
      <Route path="/programs/news-events" component={NewsEventsPage}/>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Helmet>
          <meta charSet="utf-8" />
          <title>CSEL Cincinnati</title>
          <meta name="description" content="CSEL Cincinnati strengthens our community through education, support, and advocacy." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href="https://csel-cincinnati.org" />
        </Helmet>
        <Header />
        <main className="flex-grow">
          <Router />
        </main>
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
