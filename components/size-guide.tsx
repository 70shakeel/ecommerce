"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function SizeGuide() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="link" className="h-auto p-0 text-muted-foreground">
          Size Guide
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl">Size Guide</SheetTitle>
          <SheetDescription>
            Find your perfect fit with our size charts.
          </SheetDescription>
        </SheetHeader>
        
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary/30">
              <tr>
                <th className="p-3 font-semibold">US Size</th>
                <th className="p-3 font-semibold">UK Size</th>
                <th className="p-3 font-semibold">EU Size</th>
                <th className="p-3 font-semibold">CM</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-3">7</td>
                <td className="p-3">6</td>
                <td className="p-3">40</td>
                <td className="p-3">25</td>
              </tr>
              <tr>
                <td className="p-3">8</td>
                <td className="p-3">7</td>
                <td className="p-3">41</td>
                <td className="p-3">26</td>
              </tr>
              <tr>
                <td className="p-3">9</td>
                <td className="p-3">8</td>
                <td className="p-3">42.5</td>
                <td className="p-3">27</td>
              </tr>
              <tr>
                <td className="p-3">10</td>
                <td className="p-3">9</td>
                <td className="p-3">44</td>
                <td className="p-3">28</td>
              </tr>
              <tr>
                <td className="p-3">11</td>
                <td className="p-3">10</td>
                <td className="p-3">45</td>
                <td className="p-3">29</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SheetContent>
    </Sheet>
  );
}
