import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProcedureCard from "@/components/procedure/ProcedureCard";
import { getCategoryBySlug, getProceduresByCategory } from "@/data/procedures";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const CategoryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategoryBySlug(slug || "");
  const procedures = getProceduresByCategory(slug || "");

  if (!category) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4 text-2xl font-bold text-foreground">Category Not Found</h1>
            <p className="mb-6 text-muted-foreground">
              The category you're looking for doesn't exist.
            </p>
            <Link to="/categories">
              <Button>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Categories
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-border bg-accent/30 py-12">
          <div className="container">
            {/* Breadcrumb */}
            <nav className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link to="/categories" className="hover:text-primary">Categories</Link>
              <span>/</span>
              <span className="text-foreground">{category.name}</span>
            </nav>

            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="mb-3 font-display text-3xl font-bold text-foreground md:text-4xl">
                  {category.name}
                </h1>
                <p className="max-w-2xl text-muted-foreground">
                  {category.description}
                </p>
              </div>
              <Link to="/categories">
                <Button variant="outline">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  All Categories
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Procedures Grid */}
        <section className="py-12">
          <div className="container">
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{procedures.length}</span> procedures
              </p>
            </div>

            {procedures.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {procedures.map((procedure, index) => (
                  <ProcedureCard key={procedure.id} procedure={procedure} index={index} />
                ))}
              </div>
            ) : (
              <div className="py-16 text-center">
                <p className="mb-4 text-lg font-medium text-foreground">
                  No procedures in this category yet
                </p>
                <p className="text-muted-foreground">
                  Check back soon for updates
                </p>
                <Link to="/procedures">
                  <Button variant="outline" className="mt-4">
                    Browse All Procedures
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryDetail;
