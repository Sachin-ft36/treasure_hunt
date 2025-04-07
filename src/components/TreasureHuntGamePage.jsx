"use client";

import GameTimer from "./GameTimer";
import QuestionDisplay from "./QuestionDisplay";
import AnswerOptions from "./AnswerOptions";

const TreasureHuntGamePage = () => {
  return (
    <main className="flex overflow-hidden flex-col items-center px-20 pt-8 pb-20 text-white bg-zinc-800 max-md:px-5">
      <div className="flex flex-col w-full max-w-[1437px] max-md:max-w-full">
        <GameTimer />
        <iframe
          src="https://v1.panoskin.com/?tour=5f1aef29f3c94e38a84263d8#aria-fullscreen"
          title="Treasure Hunt Virtual Tour"
          className="mt-8 w-full rounded-xl aspect-[2.21] max-md:max-w-full"
          allowFullScreen
        />
        <QuestionDisplay question="Which company owns the social media platform Instagram?" />
        <AnswerOptions />
      </div>
    </main>
  );
};

export default TreasureHuntGamePage;
