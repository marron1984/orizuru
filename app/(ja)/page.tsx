import { Landing } from "@/components/Landing";
import { getDictionary } from "@/content/dictionary";

/** 日本語版ランディング（/）。 */
export default function HomeJa() {
  return <Landing dict={getDictionary("ja")} lang="ja" />;
}
