import { Landing } from "@/components/Landing";
import { getDictionary } from "@/content/dictionary";

/** 英語版ランディング（/en）。 */
export default function HomeEn() {
  return <Landing dict={getDictionary("en")} lang="en" />;
}
