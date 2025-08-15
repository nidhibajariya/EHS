import React from 'react';

const Materials = () => {
  const materialGrades = [
    {
      category: "Alloy Steel",
      grades: [
        { din: "16MnCr5", astm: "5115", is: "16MnCr5" },
        { din: "20MnCr5", astm: "5120", is: "20MnCr5" },
        { din: "42CrMo4", astm: "4140", is: "41Cr4" },
        { din: "34CrNiMo6", astm: "4340", is: "40NiCrMo2" },
        { din: "25CrMo4", astm: "4130", is: "25Cr4Mo" }
      ]
    },
    {
      category: "Stainless Steel",
      grades: [
        { din: "1.4301", astm: "304", is: "304" },
        { din: "1.4401", astm: "316", is: "316" },
        { din: "1.4404", astm: "316L", is: "316L" },
        { din: "1.4462", astm: "S32205", is: "2205" },
        { din: "1.4571", astm: "316Ti", is: "316Ti" }
      ]
    },
    {
      category: "Carbon Steel",
      grades: [
        { din: "C22", astm: "1022", is: "20C8" },
        { din: "C45", astm: "1045", is: "45C8" },
        { din: "C60", astm: "1060", is: "60C4" },
        { din: "Ck60", astm: "1060", is: "En8" },
        { din: "C35", astm: "1035", is: "35C8" }
      ]
    },
    {
      category: "Mild Steel",
      grades: [
        { din: "S235JR", astm: "A36", is: "Fe410WA" },
        { din: "S275JR", astm: "A572", is: "Fe450" },
        { din: "S355JR", astm: "A572", is: "Fe540" },
        { din: "St37", astm: "A283C", is: "Fe410" },
        { din: "St52", astm: "A572", is: "Fe540" }
      ]
    },
    {
      category: "Investment Casting",
      grades: [
        { din: "GX5CrNi19-10", astm: "CF8", is: "1C8" },
        { din: "GX5CrNiMo19-11-2", astm: "CF8M", is: "2C12" },
        { din: "G17CrMo5-5", astm: "WCA", is: "1C5" },
        { din: "GX40CrNiSi25-20", astm: "HK40", is: "24Cr20Ni" },
        { din: "GX2CrNi19-11", astm: "CF3", is: "1C3" }
      ]
    }
  ];

  return (
    <section id="materials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Material Grades</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We work with a comprehensive range of material grades, providing equivalents across DIN, ASTM, and IS standards.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {materialGrades.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
                {category.category}
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="px-4 py-3 text-left rounded-tl-lg">DIN</th>
                      <th className="px-4 py-3 text-left">ASTM</th>
                      <th className="px-4 py-3 text-left rounded-tr-lg">IS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.grades.map((grade, gradeIndex) => (
                      <tr 
                        key={gradeIndex} 
                        className={`${gradeIndex % 2 === 0 ? 'bg-white' : 'bg-gray-100'} hover:bg-orange-50 transition-colors duration-200`}
                      >
                        <td className="px-4 py-3 border-b font-mono text-sm">{grade.din}</td>
                        <td className="px-4 py-3 border-b font-mono text-sm">{grade.astm}</td>
                        <td className="px-4 py-3 border-b font-mono text-sm">{grade.is}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Need a specific material grade not listed here?
          </p>
          <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-300">
            Contact Our Materials Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Materials;