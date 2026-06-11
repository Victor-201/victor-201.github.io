import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { useLocale } from "@/locales/use-locale";

const SkillsSection = () => {
  const { t } = useLocale();
  return (
    <SectionWrapper id="skills" className="mx-auto h-[130vh]">
      <SectionHeader id='skills' title={t("common", "section.techStack")} desc={t("common", "section.techStackHint")} />
    </SectionWrapper>
  );
};

export default SkillsSection;
