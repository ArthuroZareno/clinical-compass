import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AlertBox from "@/components/procedure/AlertBox";
import { getProcedureById } from "@/data/procedures";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ChevronLeft,
  Clock,
  BookOpen,
  AlertTriangle,
  CheckCircle,
  Package,
  FileText,
  Lightbulb,
  ExternalLink,
} from "lucide-react";

const difficultyColors = {
  basic: "success",
  intermediate: "warning",
  advanced: "destructive",
} as const;

const ProcedureDetail = () => {
  const { id } = useParams<{ id: string }>();
  const procedure = getProcedureById(id || "");

  if (!procedure) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4 text-2xl font-bold text-foreground">Procedure Not Found</h1>
            <p className="mb-6 text-muted-foreground">
              The procedure you're looking for doesn't exist.
            </p>
            <Link to="/procedures">
              <Button>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Procedures
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
        {/* Breadcrumb & Header */}
        <section className="border-b border-border bg-accent/30 py-8">
          <div className="container">
            {/* Breadcrumb */}
            <nav className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link to="/procedures" className="hover:text-primary">Procedures</Link>
              <span>/</span>
              <Link to={`/category/${procedure.categorySlug}`} className="hover:text-primary">
                {procedure.category}
              </Link>
              <span>/</span>
              <span className="text-foreground">{procedure.title}</span>
            </nav>

            {/* Title & Meta */}
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <Badge variant="category">{procedure.category}</Badge>
                  <Badge variant={difficultyColors[procedure.difficulty]}>
                    {procedure.difficulty}
                  </Badge>
                </div>
                <h1 className="mb-3 font-display text-3xl font-bold text-foreground md:text-4xl">
                  {procedure.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {procedure.estimatedTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    {procedure.steps.length} steps
                  </span>
                </div>
              </div>
              <Link to="/procedures">
                <Button variant="outline">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back to Procedures
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-10">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              {/* Description */}
              <div className="mb-8">
                <h2 className="mb-3 font-display text-xl font-semibold text-foreground">
                  Description
                </h2>
                <p className="text-muted-foreground leading-relaxed">{procedure.description}</p>
              </div>

              {/* Safety Alerts */}
              {procedure.safetyAlerts.length > 0 && (
                <AlertBox type="warning" title="Safety Alerts" className="mb-8">
                  <ul className="mt-2 space-y-1">
                    {procedure.safetyAlerts.map((alert, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>{alert}</span>
                      </li>
                    ))}
                  </ul>
                </AlertBox>
              )}

              {/* Accordion Sections */}
              <Accordion type="multiple" defaultValue={["indications", "equipment", "steps"]} className="space-y-4">
                {/* Indications */}
                <AccordionItem value="indications" className="rounded-lg border border-border bg-card px-6">
                  <AccordionTrigger className="py-4 text-foreground hover:no-underline">
                    <span className="flex items-center gap-2 font-semibold">
                      <CheckCircle className="h-5 w-5 text-success" />
                      Indications
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <ul className="space-y-2">
                      {procedure.indications.map((indication, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-success" />
                          {indication}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Contraindications */}
                <AccordionItem value="contraindications" className="rounded-lg border border-border bg-card px-6">
                  <AccordionTrigger className="py-4 text-foreground hover:no-underline">
                    <span className="flex items-center gap-2 font-semibold">
                      <AlertTriangle className="h-5 w-5 text-warning" />
                      Contraindications
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <ul className="space-y-2">
                      {procedure.contraindications.map((contra, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-warning" />
                          {contra}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Equipment */}
                <AccordionItem value="equipment" className="rounded-lg border border-border bg-card px-6">
                  <AccordionTrigger className="py-4 text-foreground hover:no-underline">
                    <span className="flex items-center gap-2 font-semibold">
                      <Package className="h-5 w-5 text-info" />
                      Required Equipment
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <ul className="space-y-2">
                      {procedure.equipment.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-info" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Preparation */}
                <AccordionItem value="preparation" className="rounded-lg border border-border bg-card px-6">
                  <AccordionTrigger className="py-4 text-foreground hover:no-underline">
                    <span className="flex items-center gap-2 font-semibold">
                      <FileText className="h-5 w-5 text-primary" />
                      Preparation
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <ol className="space-y-2">
                      {procedure.preparation.map((step, index) => (
                        <li key={index} className="flex items-start gap-3 text-muted-foreground">
                          <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                            {index + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                {/* Step-by-Step Procedure */}
                <AccordionItem value="steps" className="rounded-lg border border-border bg-card px-6">
                  <AccordionTrigger className="py-4 text-foreground hover:no-underline">
                    <span className="flex items-center gap-2 font-semibold">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Step-by-Step Procedure
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="space-y-4">
                      {procedure.steps.map((step) => (
                        <div
                          key={step.step}
                          className="rounded-lg border border-border bg-background p-4"
                        >
                          <div className="flex items-start gap-4">
                            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full hero-gradient text-sm font-bold text-primary-foreground">
                              {step.step}
                            </span>
                            <div className="flex-1">
                              <p className="font-medium text-foreground">{step.action}</p>
                              {step.rationale && (
                                <p className="mt-2 text-sm text-muted-foreground italic">
                                  <span className="font-medium not-italic">Rationale:</span> {step.rationale}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Post-Procedure Care */}
                <AccordionItem value="post-care" className="rounded-lg border border-border bg-card px-6">
                  <AccordionTrigger className="py-4 text-foreground hover:no-underline">
                    <span className="flex items-center gap-2 font-semibold">
                      <CheckCircle className="h-5 w-5 text-success" />
                      Post-Procedure Care
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <ul className="space-y-2">
                      {procedure.postProcedureCare.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-success" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Documentation */}
                <AccordionItem value="documentation" className="rounded-lg border border-border bg-card px-6">
                  <AccordionTrigger className="py-4 text-foreground hover:no-underline">
                    <span className="flex items-center gap-2 font-semibold">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      Documentation
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <ul className="space-y-2">
                      {procedure.documentation.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Tips & Common Errors */}
                <AccordionItem value="tips" className="rounded-lg border border-border bg-card px-6">
                  <AccordionTrigger className="py-4 text-foreground hover:no-underline">
                    <span className="flex items-center gap-2 font-semibold">
                      <Lightbulb className="h-5 w-5 text-warning" />
                      Tips & Common Errors
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-2 font-medium text-foreground">Tips</h4>
                        <ul className="space-y-2">
                          {procedure.tips.map((tip, index) => (
                            <li key={index} className="flex items-start gap-2 text-muted-foreground">
                              <Lightbulb className="mt-0.5 h-4 w-4 flex-shrink-0 text-warning" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-2 font-medium text-foreground">Common Errors to Avoid</h4>
                        <ul className="space-y-2">
                          {procedure.commonErrors.map((error, index) => (
                            <li key={index} className="flex items-start gap-2 text-muted-foreground">
                              <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                              {error}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* References */}
              <div className="mt-8 rounded-lg border border-border bg-card p-6">
                <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold text-foreground">
                  <ExternalLink className="h-5 w-5 text-primary" />
                  References
                </h3>
                <ul className="space-y-2">
                  {procedure.references.map((ref, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      {ref}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProcedureDetail;
