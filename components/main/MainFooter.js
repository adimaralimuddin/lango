import Link from "next/link";
import Logo from "../elements/Logo";
import { SiteMap } from "./MainHeader";

export default function MainFooter() {
  return (
    <div className="bg-slate-200 min-h-[300px] flex flex-col justify-center">
      <div className="w-full max-w-5xl m-auto ring-1d">
        <section className="flex gap-6 flex-wrap p-3">
          <div className="flex-2 md:flex-1 text-slate-600 min-w-[180px]">
            <Logo />
            <p className="max-w-[500px] py-3">
              Lango is a Language Learning Platform that implements TPRS methods
              which is the best way to acquire any language.
              <br /> lagno use TPRS method in a fun and enjoyable way to the
              learner to provide effectiveness in the language learning process.
            </p>
          </div>
          <div className="flex flex-col flex-1 gap-3 sm:flex-row">
            <Lists
              title="features"
              lists={[
                "multiple languages",
                "TPRS methodology",
                "conversations",
                "play matches",
                "play selection",
                "responsive",
                "dark theme",
              ]}
            />
            <Lists
              title="tech stacks"
              lists={[
                "nextJs",
                "tailwindCss",
                "firebase firestore",
                "firebase storage",
                "zustand",
                "rapid API",
                "axios",
              ]}
            />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="flex items-center justify-around min-h-[50px] bg-slate-300 text-black gap-6">
      <Link
        target="_blank"
        className="text-black text-xl"
        href="https://adimaralimuddin.com"
      >
        adimaralimuddin.com
      </Link>
      <Link href="">back to top</Link>
    </footer>
  );
}

function Lists({ title, lists }) {
  return (
    <article className="min-w-[250px]d flex-1  text-slate-600 ring-1d flex flex-col md:items-center">
      <div className="ring-1d mx-autod">
        <h3 className="uppercase py-2 text-xl font-bold">{title}</h3>
        <ul>
          {lists?.map((list) => (
            <li key={list}>{list}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
