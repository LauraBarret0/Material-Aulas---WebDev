import { GraficoBarras } from "@/components/GraficoBarras";
import { GraficoPizza } from "@/components/GraficoPizza";
import { Button } from "@/components/ui/button"

export default function Relatorios() {
  
  function handleClick(){
    alert('Hey Laurett')
  }

  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold">Relatórios</h1>
      <p className="mt-2 text-gray-600">Página de relatórios.</p>
      <Button onClick={handleClick}>Click me</Button>
      <div className="grid grid-cols-2">
        <GraficoBarras/>
        <GraficoPizza/>
      </div>
      
    </div>
  );
}
