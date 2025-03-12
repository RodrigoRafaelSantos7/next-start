import { siteConfig } from "@/config/site";

export function AppFooter() {
  return (
    <footer className="border-grid border-t py-6 md:py-0">
      <div className="container-wrapper">
        <div className="container py-4">
          <div className="text-muted-foreground text-center text-sm leading-loose text-balance md:text-left">
            Built by{" "}
            <a
              href={siteConfig.links.personal}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Rodrigo Santos
            </a>
            . The source code is available on{" "}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
}
