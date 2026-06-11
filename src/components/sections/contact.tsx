"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import { config } from "@/lib/app-config";
import { useLocale } from "@/locales/use-locale";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

const ContactSection = () => {
  const { t } = useLocale();
  return (
    <SectionWrapper id="contact" className="pb-5!">
      <SectionHeader id='contact' title={
        t("common", "contact.letsWork")
      } />
      <div className="flex justify-start z-9999 px-4">
        <Card className="w-full md:w-1/2 bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl mt-10 md:mt-20">
          <CardHeader>
            <CardTitle className="text-4xl">{t("common", "contact.title")}</CardTitle>
            <CardDescription>
              {t("common", "contact.description").split("{email}")[0]}
              <a
                target="_blank"
                href={`mailto:${config.email}`}
                className="text-gray-200 cursor-can-hover rounded-lg"
              >
                {config.email}
              </a>
              {t("common", "contact.description").split("{email}")[1]}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};
export default ContactSection;
