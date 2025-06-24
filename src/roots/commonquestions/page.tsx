import { CommonQuestionsHero } from "@/components/Hero";
import QuestionItem from "@/components/QuestionItem";
import { Metadata } from "next";
import { getDictionary } from "@/utils/getDictionary";
import { RouteLocale, GeneratePageMetadataProps } from "next-roots";

async function getData(locale: RouteLocale) {
  const t = await getDictionary(locale);
  return {
    title: t('commonquestions.title'),
    description: t('commonquestions.description'),
    translation: t('commonquestions.page'),
  }
}

export async function generateMetadata({
  locale
}: GeneratePageMetadataProps<void>): Promise<Metadata> {
  const { title, description } = await getData(locale);

  return { title, description };
}

export default async function CommonQuestions({ locale }: { locale: RouteLocale}) {
  const { translation } = await getData(locale);
  
  const questions = [
    {
      title: <div>{translation.questions[1].question}</div>,
      text: (
        <div className="overflow-hidden">
          {translation.questions[1].text}
        </div>
      ),
    },
    {
      title: <div>{translation.questions[2].question}</div>,
      text: (
        <div className="flex flex-col gap-6 overflow-hidden">
          <p>
            {translation.questions[2].text1}
          </p>
          <ul className="flex list-disc flex-col gap-6 pl-8">
            <li>
              <strong>{translation.questions[2].list[1].title}</strong>
              {translation.questions[2].list[1].text}
            </li>
            <li>
              <strong>{translation.questions[2].list[2].title}</strong>
              {translation.questions[2].list[2].text}
            </li>
            <li>
              <strong>{translation.questions[2].list[3].title}</strong>
              {translation.questions[2].list[3].text}
            </li>
            <li>
              <strong>{translation.questions[2].list[4].title}</strong>
              {translation.questions[2].list[4].text}
            </li>
            <li>
              <strong>{translation.questions[2].list[5].title}:</strong>
              {translation.questions[2].list[5].text}
            </li>
            <li>
              <strong>{translation.questions[2].list[6].title}</strong>
              {translation.questions[2].list[6].text}
            </li>
            <li>
              <strong>{translation.questions[2].list[7].title}</strong>
              {translation.questions[2].list[7].text}
            </li>
            <li>
              <strong>{translation.questions[2].list[8].title}</strong>
              {translation.questions[2].list[8].text}
            </li>
          </ul>
          <p>
            {translation.questions[2].text2}
          </p>
        </div>
      ),
    },
    {
      title: (
        <div>{translation.questions[3].question}</div>
      ),
      text: (
        <div className="overflow-hidden">
          {translation.questions[3].text}
        </div>
      ),
    },
    {
      title: <div>{translation.questions[4].question}</div>,
      text: (
        <div className="overflow-hidden">
          {translation.questions[4].text}
        </div>
      ),
    },
    {
      title: <div>{translation.questions[5].question}</div>,
      text: (
        <div className="overflow-hidden">
          {translation.questions[5].text}
        </div>
      ),
    },
    {
      title: (
        <div>{translation.questions[6].question}</div>
      ),
      text: (
        <div className="overflow-hidden">
          {translation.questions[6].text}
        </div>
      ),
    },
    {
      title: (
        <div>{translation.questions[7].question}</div>
      ),
      text: (
        <div className="overflow-hidden">
          {translation.questions[7].text}
        </div>
      ),
    },
    {
      title: <div>{translation.questions[8].question}</div>,
      text: (
        <div className="overflow-hidden">
          {translation.questions[8].text}
        </div>
      ),
    },
    {
      title: (
        <div>{translation.questions[9].question}</div>
      ),
      text: (
        <div className="overflow-hidden">
          {translation.questions[9].text}
        </div>
      ),
    },
    {
      title: <div>{translation.questions[10].question}</div>,
      text: (
        <div className="overflow-hidden">
          {translation.questions[10].text1}
          <span className="underline">{translation.questions[10].underline}</span>
          {translation.questions[10].text2}
        </div>
      ),
    },
  ];

  return (
    <>
      <CommonQuestionsHero translation={translation} />
      <div className="min-w-minimum">
        <div className="mx-45 mb-24 max-xl:mx-22 max-xl:my-6 max-xs:mx-8 max-xs:my-4">
          <ul className="rounded-lg bg-secondary-300">
            {questions.map((question, i) => (
              <QuestionItem
                title={question.title}
                text={question.text}
                last={questions.length === i + 1}
                key={i}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
