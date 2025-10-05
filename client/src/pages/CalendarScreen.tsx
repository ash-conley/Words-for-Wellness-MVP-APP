import { ChevronLeftIcon, ChevronRightIcon, MenuIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const weekDays = [
  { day: "Mon", number: 1 },
  { day: "Tue", number: 2 },
  { day: "Wed", number: 3 },
  { day: "Thu", number: 4 },
  { day: "Fri", number: 5 },
  { day: "Sat", number: 6 },
  { day: "Sun", number: 7 },
];

const journalEntries = [
  {
    time: "8:00 AM",
    content: "Journal entry goes here...",
    hasMore: true,
    icon: "/figmaAssets/calendar.svg",
  },
  {
    time: "12:00 pm",
    content: "Write about it",
    hasMore: false,
    icon: "/figmaAssets/nav-icon.svg",
  },
  {
    time: "4:00 pm",
    content: "Write about it",
    hasMore: false,
    icon: "/figmaAssets/calendar.svg",
  },
];

export const CalendarScreen = (): JSX.Element => {
  return (
    <div className="bg-bg-color border-[10px] border-solid border-[#1e1e1e] w-full min-w-[428px] min-h-[926px] flex flex-col">
      <header className="ml-[17px] w-[393px] h-[54px] relative mt-3.5">
        <div className="absolute w-[35.75%] top-[calc(50.00%_-_27px)] left-0 h-[54px]">
          <div className="absolute w-[26.33%] h-[40.74%] top-[33.96%] left-[36.96%] [font-family:'SF_Pro-Semibold',Helvetica] font-normal text-labelsprimary text-[17px] text-center tracking-[0] leading-[22px] whitespace-nowrap">
            9:41
          </div>
        </div>

        <img
          className="absolute w-[35.75%] top-[calc(50.00%_-_27px)] left-[64.25%] h-[54px]"
          alt="Levels"
          src="/figmaAssets/levels.svg"
        />
      </header>

      <nav className="flex ml-[9px] w-[407px] h-14 relative mt-3.5 items-center justify-between px-5 py-[3px]">
        <Button variant="ghost" size="icon" className="h-auto w-auto p-0">
          <MenuIcon className="w-[22px] h-[18px]" />
        </Button>

        <Avatar className="w-[50px] h-[50px] border-[3px] border-solid border-[#555b59]">
          <AvatarImage src="/figmaAssets/ellipse.png" alt="Profile" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </nav>

      <h1 className="ml-[29px] w-[231px] h-9 mt-3.5 [font-family:'Comfortaa',Helvetica] font-normal text-[#1e1e1e] text-[32px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
        <span className="font-medium">Hello,</span>
        <span className="font-bold"> [Name]!</span>
      </h1>

      <section className="ml-[22px] w-[384.15px] h-[104px] relative mt-12">
        <div className="absolute top-[39px] left-0 w-[392px] h-[65px]">
          {weekDays.map((item, index) => (
            <div
              key={index}
              className={`absolute ${
                index === 0
                  ? "left-8"
                  : index === 1
                    ? "left-20"
                    : index === 2
                      ? "left-[127px]"
                      : index === 3
                        ? "left-[174px]"
                        : index === 4
                          ? "left-[221px]"
                          : index === 5
                            ? "left-[267px]"
                            : "left-[315px]"
              } ${
                index === 6 ? "bg-[#4895c1]" : "bg-[#d5e8e4]"
              } rounded-[18.5px] shadow-[0px_0px_4px_1px_#0000001a] top-7 w-[37px] h-[37px]`}
            >
              <div className="absolute top-[37px] left-[calc(50.00%_-_8px)] w-3.5 h-4 flex items-center justify-center [font-family:'Monomaniac_One',Helvetica] font-normal text-[#4895c1] text-[15px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                {item.number}
              </div>

              <div className="absolute w-[40.54%] h-[40.54%] top-[29.73%] left-[29.73%]">
                <img
                  className="absolute top-0 left-1.5 w-[3px] h-[15px]"
                  alt="Line"
                  src="/figmaAssets/line-5.svg"
                />

                <img
                  className="absolute top-1.5 left-0 w-[15px] h-[3px]"
                  alt="Line"
                  src="/figmaAssets/line-6.svg"
                />
              </div>
            </div>
          ))}

          <div className="left-[calc(50.00%_-_18px)] w-[29px] absolute top-0 h-5 flex items-center justify-center font-main-tetx font-[number:var(--main-tetx-font-weight)] text-[#4895c1] text-[length:var(--main-tetx-font-size)] text-center tracking-[var(--main-tetx-letter-spacing)] leading-[var(--main-tetx-line-height)] whitespace-nowrap [font-style:var(--main-tetx-font-style)]">
            Thu
          </div>

          <div className="left-[calc(50.00%_+_32px)] w-[23px] absolute top-0 h-5 flex items-center justify-center font-main-tetx font-[number:var(--main-tetx-font-weight)] text-[#4895c1] text-[length:var(--main-tetx-font-size)] text-center tracking-[var(--main-tetx-letter-spacing)] leading-[var(--main-tetx-line-height)] whitespace-nowrap [font-style:var(--main-tetx-font-style)]">
            Fri
          </div>

          <div className="left-[calc(50.00%_+_75px)] w-[30px] absolute top-0 h-5 flex items-center justify-center font-main-tetx font-[number:var(--main-tetx-font-weight)] text-[#4895c1] text-[length:var(--main-tetx-font-size)] text-center tracking-[var(--main-tetx-letter-spacing)] leading-[var(--main-tetx-line-height)] whitespace-nowrap [font-style:var(--main-tetx-font-style)]">
            Sat
          </div>

          <div className="left-[calc(50.00%_+_122px)] w-[30px] absolute top-0 h-5 flex items-center justify-center font-main-tetx font-[number:var(--main-tetx-font-weight)] text-[#4895c1] text-[length:var(--main-tetx-font-size)] text-center tracking-[var(--main-tetx-letter-spacing)] leading-[var(--main-tetx-line-height)] whitespace-nowrap [font-style:var(--main-tetx-font-style)]">
            Sun
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="left-0 absolute top-[31px] w-8 h-8 p-0 h-auto"
          >
            <ChevronLeftIcon className="w-8 h-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="left-[352px] absolute top-[31px] w-8 h-8 p-0 h-auto"
          >
            <ChevronRightIcon className="w-8 h-8" />
          </Button>
        </div>

        <div className="absolute top-0 left-9 w-[223px] h-[58px]">
          <div className="absolute top-0 left-[calc(50.00%_-_14px)] w-[115px] h-[15px] flex items-end justify-center font-main-tetx font-[number:var(--main-tetx-font-weight)] text-[#73adce] text-[length:var(--main-tetx-font-size)] text-center tracking-[var(--main-tetx-letter-spacing)] leading-[var(--main-tetx-line-height)] whitespace-nowrap [font-style:var(--main-tetx-font-style)]">
            October 7th
          </div>

          <div className="absolute top-3 left-[calc(50.00%_+_10px)] w-[67px] [font-family:'Montserrat',Helvetica] font-bold text-dark text-xs text-center tracking-[0] leading-[normal]">
            2025
          </div>

          <div className="absolute top-[38px] left-[calc(50.00%_-_112px)] w-8 h-5 flex items-center justify-center font-main-tetx font-[number:var(--main-tetx-font-weight)] text-[#4895c1] text-[length:var(--main-tetx-font-size)] text-center tracking-[var(--main-tetx-letter-spacing)] leading-[var(--main-tetx-line-height)] whitespace-nowrap [font-style:var(--main-tetx-font-style)]">
            Mon
          </div>

          <div className="absolute top-[38px] left-[calc(50.00%_-_64px)] w-[30px] h-5 flex items-center justify-center font-main-tetx font-[number:var(--main-tetx-font-weight)] text-[#4895c1] text-[length:var(--main-tetx-font-size)] text-center tracking-[var(--main-tetx-letter-spacing)] leading-[var(--main-tetx-line-height)] whitespace-nowrap [font-style:var(--main-tetx-font-style)]">
            Tue
          </div>

          <div className="absolute top-[38px] left-[calc(50.00%_-_18px)] w-[34px] h-5 flex items-center justify-center font-main-tetx font-[number:var(--main-tetx-font-weight)] text-[#4895c1] text-[length:var(--main-tetx-font-size)] text-center tracking-[var(--main-tetx-letter-spacing)] leading-[var(--main-tetx-line-height)] whitespace-nowrap [font-style:var(--main-tetx-font-style)]">
            Wed
          </div>
        </div>
      </section>

      <main className="ml-6 w-[377px] mt-[45px] flex flex-col gap-4">
        {journalEntries.map((entry, index) => (
          <Card
            key={index}
            className="bg-[#7ba888] border-none shadow-md rounded-[20px] overflow-hidden"
          >
            <CardContent className="p-4 flex items-start gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <img src={entry.icon} alt="Entry icon" className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-white font-semibold text-base mb-1">
                  {entry.time}
                </div>
                <div className="text-white/90 text-sm">{entry.content}</div>
              </div>
              {entry.hasMore && (
                <Button
                  variant="ghost"
                  className="text-white/80 text-xs p-0 h-auto hover:bg-transparent hover:text-white"
                >
                  See more
                </Button>
              )}
              {!entry.hasMore && (
                <span className="text-white/80 text-xs">Write about it</span>
              )}
            </CardContent>
          </Card>
        ))}

        <Card className="bg-[#d5e8e4] border-none shadow-md rounded-[20px] overflow-hidden">
          <CardContent className="p-4 flex items-center justify-center">
            <span className="text-[#7ba888] font-medium text-base">
              Log your mood
            </span>
          </CardContent>
        </Card>
      </main>

      <nav className="flex ml-[7px] w-[414px] h-[81px] relative mt-16 items-center justify-center gap-12 px-11 py-7 bg-[#d5e8e4] rounded-[45px] overflow-hidden">
        <Button
          variant="ghost"
          size="icon"
          className="relative h-auto w-auto p-0"
        >
          <div className="relative w-[25px] h-[25px] bg-[url(/figmaAssets/home.svg)] bg-[100%_100%]">
            <img
              className="absolute top-[34px] left-[70px] w-[31px] h-[3px]"
              alt="Line"
              src="/figmaAssets/line-1.svg"
            />
          </div>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="relative h-auto w-auto p-0"
        >
          <img
            className="relative w-[25.09px] h-[24.82px]"
            alt="Calendar"
            src="/figmaAssets/calendar.svg"
          />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="relative h-auto w-auto p-0"
        >
          <img
            className="relative w-6 h-6"
            alt="Nav icon"
            src="/figmaAssets/nav-icon.svg"
          />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="relative h-auto w-auto p-0"
        >
          <img
            className="relative w-6 h-[23.74px]"
            alt="Profile"
            src="/figmaAssets/profile.svg"
          />
        </Button>
      </nav>
    </div>
  );
};
