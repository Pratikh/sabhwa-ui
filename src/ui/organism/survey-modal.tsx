import Button from "../atoms/button";
import Radio from "../atoms/radio";

const surveyQuestion = [
  {
    id: "1",
    question: "Your partner speaks English",
    name: "english_level",
    options: [
      { label: "Better than me", name: "1" },
      { label: "As much as me", name: "2" },
      { label: "Not as much as me", name: "3" },
    ],
  },
  {
    id: "2",
    question: "Want to meet him/her again?",
    name: "want_to_meet_again",
    options: [
      { label: "👍 I'd love to!", name: "1" },
      { label: "😐 I don't care", name: "2" },
      { label: "🙅 No, avoid as possible", name: "3" },
    ],
  },
];
export default function SurveyModal() {
  return (
    <div className="lg:w-[317px] bg-white">
      <div id="header" className="bg-primary text-white h-[40px] text-center">
        How was your partner?
      </div>
      <div id="body">
        <form>
          {surveyQuestion.map((item) => (
            <div key={item.id} className="flex flex-col pt-2">
              <b>{item.question}</b>
              <div className="p-2">
                {item.options.map((options) => (
                  <Radio
                    id={options.name}
                    name={item.name}
                    value={options.label}
                  />
                ))}
              </div>
            </div>
          ))}
        </form>
      </div>
      <div
        id="controller"
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <Button variant={"secondary"}>Exit</Button>
        <Button variant={"default"}>Meet new partner</Button>
      </div>
      <div id="footer"></div>
    </div>
  );
}
