import { useTranslations } from "next-intl";


export default function Home() {

  const t = useTranslations("Homepage")

  return (
    <div>
     <h1>{t("title")}</h1>
     <p>{t("content")}</p>
    </div>
  );
}
