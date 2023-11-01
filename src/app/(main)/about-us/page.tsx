import AboutUs from "@/components/about-us/components/about-us";
import {
  PageHeaderTwo,
  PageHeaderProps,
} from "@/components/layout/templates/page-header";
import type { Metadata } from "next";

const info: PageHeaderProps = {
  title: "An ambitious team of talented individuals",
  description: "Who we are?",
};

export const metadata: Metadata = {
  title: info.title,
  description: info.description,
};

const aboutUsText:string = `
Hey There!

Thanks a lot for your curiosity in getting to know us a bit better.

Sure, we could bore you with a list of credentials, boasting about our over a decade long  photography experience and the fancy cameras we use, but let's be real—does all that jazz really matter? Not so much!

The most important question is: Why would you choose AVIME for your school photography needs? And the answer is super simple – because, as our slogan says, 'Elevating elegance, capturing legacy,' we mean it!

School photography seems like it's been caught in a '90s time warp, doesn't it? Those unappealing "blue, cloudy" backgrounds and extra photos crammed into your package just to bulk it up, keychains that scratch, the bent corners on those bookmarks… Yuck! It’s time to say goodbye to the old and in with the new! Don’t get us wrong. We are still keeping the tradition to have your headshot taken every year, but we thought, why not give it a shot and shake things up!

We began with the most important question: What do the parents and kids truly want?

To start off – Quality. 

Precision in lighting to complement every skin tone, a background that resonates with modern standards, and a careful eye for details like untangled shirts, well-groomed hair, and eyes free from squints. It's all about delivering excellence.

Taking a new approach – Modernising the outdated

Reinventing the products in our packages was a big one! We wanted to make sure that we aren't selling you low-quality items just for the sake of making a sale. Our goal is and will be to offer products that you would actually be able to use in the real world, rather than having them collect dust in the cupboard or above the fridge, or making you feel embarrassed when showcasing them to your neighbor when they come over for a vegemite scroll.

What do we offer?

When purchasing our school booklet, you will receive a booklet with a warm welcome from your school principal, a photo of your school, and shots of you and all your classmates. It's like an appetizer at a restaurant – it tastes great but won't fill you up. Level up to our 'Artist in the Making' package, which includes the school booklet, two 5x7 photos (one for each grandparent to frame), and four wallet photos for Mum and Dad to keep with them at all times! In our 'Garage Band Vocalist' package, we've added an 8x10 photo for you to proudly display on your own wall. And if you're ready to fully embrace the photography experience, definitely check out our 'Rockstar' package that includes everything above mentiond and adds extra 2x 4x6 photos as well as a what we call a “learning set” – Bookmark and calendar.

We are here to make your school photo stand out! So let’s work together!

`;

export default function AboutPage() {
  return (
    <>
      <PageHeaderTwo title={info.title} description={info.description} />
      <AboutUs text={aboutUsText} />
    </>
  );
}
