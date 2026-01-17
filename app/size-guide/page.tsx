export default function SizeGuidePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Size Guide</h1>
      <div className="max-w-3xl">
        <p className="text-lg text-muted-foreground mb-8">
          Find your perfect fit with our size charts.
        </p>
        
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-secondary/30">
              <tr>
                <th className="p-4 font-semibold">US Size</th>
                <th className="p-4 font-semibold">UK Size</th>
                <th className="p-4 font-semibold">EU Size</th>
                <th className="p-4 font-semibold">CM</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-4">7</td>
                <td className="p-4">6</td>
                <td className="p-4">40</td>
                <td className="p-4">25</td>
              </tr>
              <tr>
                <td className="p-4">8</td>
                <td className="p-4">7</td>
                <td className="p-4">41</td>
                <td className="p-4">26</td>
              </tr>
              <tr>
                <td className="p-4">9</td>
                <td className="p-4">8</td>
                <td className="p-4">42.5</td>
                <td className="p-4">27</td>
              </tr>
              <tr>
                <td className="p-4">10</td>
                <td className="p-4">9</td>
                <td className="p-4">44</td>
                <td className="p-4">28</td>
              </tr>
              <tr>
                <td className="p-4">11</td>
                <td className="p-4">10</td>
                <td className="p-4">45</td>
                <td className="p-4">29</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
