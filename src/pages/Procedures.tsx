import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProcedureCard from "@/components/procedure/ProcedureCard";
import { procedures, categories } from "@/data/procedures";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X } from "lucide-react";

const Procedures = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  const filteredProcedures = useMemo(() => {
    return procedures.filter((procedure) => {
      const matchesSearch =
        !searchQuery ||
        procedure.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        procedure.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        procedure.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        !selectedCategory || procedure.categorySlug === selectedCategory;

      const matchesDifficulty =
        !selectedDifficulty || procedure.difficulty === selectedDifficulty;

      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setSelectedDifficulty(null);
  };

  const hasActiveFilters = searchQuery || selectedCategory || selectedDifficulty;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-border bg-accent/30 py-12">
          <div className="container">
            <h1 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              All Nursing Procedures
            </h1>
            <p className="max-w-2xl text-muted-foreground">
              Browse our comprehensive library of evidence-based nursing procedures. Use the search and filters to find exactly what you need.
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="border-b border-border bg-card py-6">
          <div className="container">
            {/* Search */}
            <div className="mb-6">
              <div className="relative max-w-xl">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search procedures..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Filter Chips */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Filters:</span>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, 5).map((category) => (
                  <Button
                    key={category.slug}
                    variant={selectedCategory === category.slug ? "default" : "outline"}
                    size="sm"
                    onClick={() =>
                      setSelectedCategory(
                        selectedCategory === category.slug ? null : category.slug
                      )
                    }
                  >
                    {category.name}
                  </Button>
                ))}
              </div>

              {/* Difficulty Filter */}
              <div className="flex gap-2">
                {["basic", "intermediate", "advanced"].map((difficulty) => (
                  <Button
                    key={difficulty}
                    variant={selectedDifficulty === difficulty ? "default" : "outline"}
                    size="sm"
                    onClick={() =>
                      setSelectedDifficulty(
                        selectedDifficulty === difficulty ? null : difficulty
                      )
                    }
                  >
                    {difficulty}
                  </Button>
                ))}
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  <X className="mr-1 h-4 w-4" />
                  Clear
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-12">
          <div className="container">
            {/* Results Count */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{filteredProcedures.length}</span> procedures
              </p>
            </div>

            {/* Procedures Grid */}
            {filteredProcedures.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProcedures.map((procedure, index) => (
                  <ProcedureCard key={procedure.id} procedure={procedure} index={index} />
                ))}
              </div>
            ) : (
              <div className="py-16 text-center">
                <p className="mb-4 text-lg font-medium text-foreground">No procedures found</p>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters
                </p>
                <Button variant="outline" className="mt-4" onClick={clearFilters}>
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Procedures;
