"use client";
import { FeatureIcons, Icons } from "@/config/icons";

type CardProp = {
  children: React.ReactNode;
};

function Card({ children }: CardProp) {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-2 text-center">
        {children}
      </div>
    </div>
  );
}

export default function Features2() {
  return (
    <section
      id="features"
      className="border-t py-8 dark:bg-transparent md:py-12 lg:py-24"
    >
      <div className="container">
        <div className="mx-auto grid grid-cols-1 justify-center gap-4 py-8 sm:grid-cols-3">
          <Card>
            <div className="flex items-center justify-center">
              <FeatureIcons.award className="h-20 w-20" />
            </div>
            <h3 className="pt-2 text-xl font-bold">100% Quality</h3>
            <p className="text-sm text-muted-foreground">
              We take quality seriously! The products, photos, and service we
              deliver is top tier. Our priority is making sure that we deliver
              the results you expect!
            </p>
          </Card>
          <Card>
            <div className="flex items-center justify-center">
              <FeatureIcons.rocket className="h-20 w-20" />
            </div>
            <h3 className="pt-2 text-xl font-bold">Modern</h3>
            <p className="text-sm text-muted-foreground">
              We have researched and researched and researched again what
              parents and their children would like from school photos and we
              listened.
            </p>
          </Card>
          <Card>
            <div className="flex items-center justify-center">
              <FeatureIcons.wallet className="h-20 w-20" />
            </div>
            <h3 className="pt-2 text-xl font-bold">Affordable</h3>
            <p className="text-sm text-muted-foreground">
              Quality doesnt have to be out of reach. We have made sure that all
              of our products are qualitative without increasing the pricing
              dramatically. We have options for everyone.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
