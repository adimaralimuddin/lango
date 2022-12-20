import LangMain from "../lang/LangMain";
import LessonMain from "../lesson/LessonMain";
import LevelMain from "../level/LevelMain";
import MainLayout from "./MainLayout";
import useStore from "./MainStore";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function MainPage() {
  const { tab, set } = useStore();
  const r = useRouter();

  useEffect(() => {
    const { tab, lang, level, lesson } = r.query;
    console.log("setting tab,lang,level");
    set({ tab, lang, level, lesson });
  }, [r]);

  const content = () => {
    switch (tab) {
      case "levels":
        return <LevelMain />;
      case "lessons":
        return <LessonMain />;
      default:
        return <LangMain />;
    }
  };
  return <MainLayout>{content()}</MainLayout>;
}
