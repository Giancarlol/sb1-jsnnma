import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface Product {
  bank: string;
  logo: string;
  accountType: string;
  currency: string;
  rate: string;
}

const products: Product[] = [
  {
    bank: 'Scotiabank',
    logo: 'https://logos-world.net/wp-content/uploads/2020/11/Scotiabank-Logo.png',
    accountType: 'CUENTA POWER',
    currency: 'SOLES',
    rate: 'hasta 4.50% TEA'
  },
  {
    bank: 'Caja Cusco',
    logo: 'https://www.cmac-cusco.com.pe/img/logo-caja-cusco.png',
    accountType: 'CAMPAÑA HAZ CRECER TUS AHORROS DIGITAL',
    currency: 'SOLES',
    rate: '4.75% TEA'
  },
  {
    bank: 'Interbank',
    logo: 'https://seeklogo.com/images/I/interbank-logo-B51C1C0E4D-seeklogo.com.png',
    accountType: 'CUENTA DE AHORROS SÚPER TASA',
    currency: 'SOLES',
    rate: 'hasta 3.50% TEA'
  }
];

export function RecommendedProducts() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-12">
          Productos Recomendados:
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.bank} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex items-center justify-center h-32 p-4">
                <img
                  src={product.logo}
                  alt={`${product.bank} logo`}
                  className="h-full object-contain"
                />
              </CardHeader>
              <CardContent className="text-center">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {product.accountType}
                </h3>
                <p className="text-gray-600 mb-2">{product.currency}</p>
                <p className="text-xl font-bold text-rose-500">{product.rate}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}