import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { useLocation } from "wouter";
import { SearchResult } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import SearchComponent from "@/components/search/SearchComponent";
import { Helmet } from "react-helmet";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bookmark, Calendar, FileText, Layers } from "lucide-react";

// Helper function to get query params
function useQueryParams() {
  const [location] = useLocation();
  return new URLSearchParams(location.split("?")[1]);
}

// Type icon mapping
const typeIconMap = {
  'page': <FileText className="h-5 w-5 text-gray-500" />,
  'program': <Layers className="h-5 w-5 text-green-500" />,
  'news': <Bookmark className="h-5 w-5 text-blue-500" />,
  'event': <Calendar className="h-5 w-5 text-amber-500" />
};

// Type label mapping
const typeLabelMap = {
  'page': 'Page',
  'program': 'Program',
  'news': 'News',
  'event': 'Event'
};

export default function SearchPage() {
  const params = useQueryParams();
  const query = params.get("q") || "";
  const { toast } = useToast();

  // Fetch search results
  const { data, isLoading, isError } = useQuery({
    queryKey: ['/api/search', query],
    queryFn: async () => {
      if (!query) return { results: [] };
      const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }
      return response.json();
    },
    enabled: query.length > 0
  });

  const searchResults: SearchResult[] = data?.results || [];
  
  return (
    <>
      <Helmet>
        <title>Search Results | CSEL Cincinnati</title>
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6">Search Results</h1>
          <div className="max-w-md mb-8">
            <SearchComponent />
          </div>
          
          {query && (
            <p className="text-gray-600">
              {isLoading ? "Searching..." : `Showing results for "${query}"`}
            </p>
          )}
        </div>
        
        {isError && (
          <div className="p-4 bg-red-50 text-red-800 rounded-md mb-6">
            An error occurred while searching. Please try again.
          </div>
        )}
        
        {!isLoading && !isError && searchResults.length === 0 && query && (
          <div className="p-6 bg-gray-50 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">No results found</h3>
            <p className="text-gray-600">
              Your search for "{query}" did not match any content on our site.
            </p>
            <div className="mt-4">
              <h4 className="font-medium mb-2">Suggestions:</h4>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Check the spelling of your search term</li>
                <li>Try using more general keywords</li>
                <li>Try using different keywords</li>
              </ul>
            </div>
          </div>
        )}
        
        {searchResults.length > 0 && (
          <div className="grid gap-6">
            {searchResults.map((result) => (
              <Card key={result.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">
                      <Link href={result.url} className="text-blue-700 hover:underline">
                        {result.title}
                      </Link>
                    </CardTitle>
                    <Badge className="ml-2" variant="outline">
                      <span className="flex items-center">
                        {typeIconMap[result.type]}
                        <span className="ml-1">{typeLabelMap[result.type]}</span>
                      </span>
                    </Badge>
                  </div>
                  <CardDescription className="text-sm text-gray-500">
                    {result.url}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{result.excerpt}</p>
                  <div className="mt-4">
                    <Link href={result.url}>
                      <span className="text-blue-600 hover:underline font-medium">
                        View {typeLabelMap[result.type].toLowerCase()} →
                      </span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
}