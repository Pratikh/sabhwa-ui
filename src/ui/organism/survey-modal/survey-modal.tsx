import Button from "../../atoms/button/button";
import Radio from "../../atoms/radio-button/radio";

const surveyQuestion = [
  {
    id: "1",
    question: "1. Your partner speaks English",
    name: "english_level",
    options: [
      { label: "Better than me", name: "1-1" },
      { label: "As much as me", name: "1-2" },
      { label: "Not as much as me", name: "1-3" },
    ],
  },
  {
    id: "2",
    question: "2. Want to meet him/her again?",
    name: "want_to_meet_again",
    options: [
      { label: "👍 I'd love to!", name: "2-1" },
      { label: "😐 I don't care", name: "2-2" },
      { label: "🙅 No, avoid as possible", name: "2-3" },
    ],
  },
];

export default function SurveyModal() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-[#000000B2]">
      <section className="lg:w-[317px] bg-white rounded-md">
        <div id="header" className="bg-primary text-white  p-4 rounded-t-md">
          How was your partner?
        </div>
        <div id="body" className="p-4">
          <form>
            {surveyQuestion.map((item) => (
              <div key={item.id} className="flex flex-col ">
                <b>{item.question}</b>
                <div className="p-2">
                  {item.options.map((options) => (
                    <Radio
                      id={options.name}
                      name={item.name}
                      value={options.label}
                      className="p-1"
                      labelClassName="text-[#686868]"
                    />
                  ))}
                </div>
              </div>
            ))}
          </form>
        </div>
        <div
          id="controller"
          className="flex gap-2 items-center justify-between p-4"
        >
          <Button variant={"secondary"}>Leave</Button>
          <Button variant={"default"}>Meet new partner</Button>
        </div>
        <div id="footer" className="p-4">
          <p className="text-[#353535]">
            If not clicking anything in <b>20 seconds</b>, you'll move to
            Homepage.
          </p>
          <div className="flex gap-2 justify-start items-center pt-4">
            <p className="text-[#353535]">Now you have</p>
            <div className="flex justify-center items-center">
              <img src="icons/white_ticket.svg" /> <p>× 2</p>
            </div>
            <div className="flex justify-center items-center">
              <img src="icons/blue_ticket.svg" />
              <p>× 2</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
