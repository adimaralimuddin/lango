import Image from "next/image";

export default function MainDesc() {
  return (
    <div className="min-h-screen py-16">
      <div className="w-full max-w-5xl mx-auto flex flex-col">
        <header className="text-center p-3">
          <h2 className="py-5 font-bold">Why Learn With Lango?</h2>
        </header>
        <section>
          <Feature img="tprs" title="TPRS Learning Methods">
            Lango Implements TPRS method that focuses on the systematic
            instruction of vocabulary in a highly comprehensible, personalized
            and contextualized manner.
          </Feature>
          <Feature img="feature2" title="Engagin Stories" reverse={true}>
            Lango Implements TPRS method that focuses on the systematic
            instruction of vocabulary in a highly comprehensible, personalized
            and contextualized manner.
          </Feature>
          <Feature img="feature3" title="Fun And Exciting!">
            Lango Implements TPRS method that focuses on the systematic
            instruction of vocabulary in a highly comprehensible, personalized
            and contextualized manner.
          </Feature>
        </section>
      </div>
    </div>
  );
}

function Feature({ title, body, children, reverse, img }) {
  return (
    <div
      className={
        "flex flex-wrap items-center gap-6 " + (reverse && " flex-row-reverse")
      }
    >
      <div className="max-w-[400px]d p-6 flex flex-col gap-6 flex-1">
        <header>
          <h3 className="text-primary-lightd font-bold">{title}</h3>
        </header>
        <main>
          <p className="text-slate-600 text-[1.3rem] font-semibold">
            {children}
          </p>
        </main>
      </div>
      <div className="ring-1d dflex-1">
        <Image src={`/images/${img}.svg`} width={500} height={500} alt="" />
      </div>
    </div>
  );
}
