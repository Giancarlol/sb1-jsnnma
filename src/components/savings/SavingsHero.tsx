import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export function SavingsHero() {
  return (
    <div className="relative min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-sm uppercase tracking-wide text-gray-600">CUENTAS DE AHORROS</h2>
              <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                Ahorra mientras organizas tus finanzas
              </h1>
            </div>
            
            <div className="space-y-6 max-w-lg">
              <div className="space-y-2">
                <Label>Tipo de Cuenta</Label>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="bg-white">Normal</Button>
                  <Button variant="outline">Sueldo</Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Moneda</Label>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline">Soles</Button>
                  <Button variant="outline">Dólares</Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Saldo Promedio</Label>
                <Slider defaultValue={[30000]} max={100000} step={1000} />
                <div className="text-sm text-gray-500">S/ 30,000</div>
              </div>

              <div className="space-y-2">
                <Label>Tipo de Institución</Label>
                <Select>
                  <option>Bancos, Cajas y Financieras</option>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Ubicación</Label>
                <Select>
                  <option>Selecciona</option>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" placeholder="Ingresa tu email" />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="terms" />
                <Label htmlFor="terms" className="text-sm">
                  Quiero recibir consejos y promociones de acuerdo a los Términos y Condiciones
                </Label>
              </div>

              <Button size="lg" className="w-full bg-rose-500 hover:bg-rose-600">
                Compara
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80"
              alt="Person using tablet"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}