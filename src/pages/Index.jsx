import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [hand, setHand] = useState("");
  const [board, setBoard] = useState("");
  const [suggestedMove, setSuggestedMove] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic GTO strategy algorithm (placeholder)
    const move = suggestMove(hand, board);
    setSuggestedMove(move);
  };

  const suggestMove = (hand, board) => {
    // Placeholder for GTO strategy algorithm
    // For now, it just returns a dummy move
    return "Check";
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Poker GTO Assistant</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="hand" className="block text-sm font-medium text-gray-700">
                Your Hand
              </label>
              <Input
                id="hand"
                value={hand}
                onChange={(e) => setHand(e.target.value)}
                placeholder="e.g., AhKh"
                required
              />
            </div>
            <div>
              <label htmlFor="board" className="block text-sm font-medium text-gray-700">
                Board Cards
              </label>
              <Input
                id="board"
                value={board}
                onChange={(e) => setBoard(e.target.value)}
                placeholder="e.g., QhJhTh"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Get Suggested Move
            </Button>
          </form>
          {suggestedMove && (
            <div className="mt-4 p-4 bg-gray-100 rounded-md">
              <h2 className="text-lg font-medium">Suggested Move:</h2>
              <p className="text-xl">{suggestedMove}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;