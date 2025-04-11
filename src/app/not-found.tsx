import { Column, Heading, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı - 404",
  description: "Aradığınız sayfa bulunamadı. Lütfen farklı bir sayfa deneyin.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <Column as="section" fill center paddingBottom="160">
      <Text marginBottom="s" variant="display-strong-xl">
        404
      </Text>
      <Heading marginBottom="l" variant="display-default-xs">
        Sayfa Bulunamadı
      </Heading>
      <Text onBackground="neutral-weak">Aradığınız sayfa mevcut değil.</Text>
    </Column>
  );
}
