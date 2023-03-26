import { useRouter } from "next/router";
import { useEffect } from "react";
import LangMain from "../lang/LangMain";
import LessonMain from "../lesson/LessonMain";
import LevelMain from "../level/LevelMain";
import useStore from "./MainStore";

export default function MainPage() {
  const { tab, set } = useStore();
  const router = useRouter();

  useEffect(() => {
    const { tab, lang, level, lesson } = router.query;
    set({ tab, lang, level, lesson });
  }, [router]);

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
  return content();
}
