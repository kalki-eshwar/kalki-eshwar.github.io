import Layout from '@/components/layout/Layout';
import { SEOProps } from '@/types';
import { getTailwindClass } from '@/presets';
import Image from 'next/image';
import cryptoWallets from '@/content/crypto-wallets.json';
import { useState } from 'react';

type Wallet = {
  name: string;
  symbol: string;
  address?: string;
  icon: string;
  image?: string;
};

const wallets = cryptoWallets as Wallet[]; // Edit src/content/crypto-wallets.json to add or update wallets


export default function Support() {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const seo: SEOProps = {
    title: 'Support',
    description: 'Support my work through a donation',
    canonical: 'https://kalkieshward.me/support',
  };

  const copyToClipboard = async (address: string | undefined, symbol: string) => {
    if (!address) return;
    try {
      await navigator.clipboard.writeText(address);
      setCopiedAddress(symbol);
      setTimeout(() => setCopiedAddress(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <Layout seo={seo}>
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className={`text-4xl font-bold mb-4 ${getTailwindClass('text-gray-900')}`}>
                <span className={getTailwindClass('text-red-600')}>Support</span> My Work
              </h1>
              <p className={`text-lg ${getTailwindClass('text-gray-600')}`}>
                If you find my work <span className={getTailwindClass('text-red-600')}>valuable</span>, consider supporting me with a donation.
              </p>
            </div>

            {/* Wallet Cards */}
            <div className="space-y-4">
              {wallets.map((wallet) => (
                <div
                  key={wallet.symbol}
                  className={`p-6 rounded-lg border ${getTailwindClass('border-gray-200')} ${getTailwindClass('bg-white')} hover:shadow-lg transition-shadow duration-200`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        {wallet.image ? (
                          <Image src={wallet.image} alt={`${wallet.name} logo`} width={48} height={48} className={`rounded-md ${getTailwindClass('bg-white')}`} />
                        ) : (
                          <div className={`text-4xl ${getTailwindClass('text-gray-700')}`}>{wallet.icon}</div>
                        )}
                      </div>
                      <div>
                        <h3 className={`text-xl font-semibold ${getTailwindClass('text-gray-900')}`}>
                          {wallet.name}
                        </h3>
                        <p className={`text-sm ${getTailwindClass('text-gray-500')}`}>
                          {wallet.symbol}
                        </p>
                      </div>
                    </div>
                  </div>

                  {wallet.address ? (
                    <div className="mt-4">
                      <div className={`flex items-center justify-between p-3 rounded ${getTailwindClass('bg-gray-50')} border ${getTailwindClass('border-gray-200')}`}>
                        <code className={`text-sm ${getTailwindClass('text-gray-700')} break-all`}>
                          {wallet.address}
                        </code>
                        <button
                          onClick={() => copyToClipboard(wallet.address, wallet.symbol)}
                          className={`ml-4 px-4 py-2 rounded ${getTailwindClass('bg-red-600')} ${getTailwindClass('text-white')} hover:opacity-90 transition-opacity whitespace-nowrap`}
                          data-analytics="button_click"
                          data-analytics-label={`copy_${wallet.symbol.toLowerCase()}_address`}
                          data-analytics-section="support"
                        >
                          {copiedAddress === wallet.symbol ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-4">
                      <p className={`text-sm italic ${getTailwindClass('text-gray-400')}`}>
                        Wallet address coming soon
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* PayPal */}
            <div className="mt-8 flex justify-center">
              <a
                href="https://paypal.com/paypalme/kalkieshwar"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-5 py-3 rounded-md ${getTailwindClass('bg-blue-600')} ${getTailwindClass('text-white')} hover:opacity-90 transition-opacity`}
                data-analytics="external_link_click"
                data-analytics-label="paypal_support"
                data-analytics-section="support"
              >
                <span className="sr-only">Donate with PayPal (opens in a new tab)</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M14.5 7.5c-1.1 0-1.9.2-2.7.4-.8.2-1.6.4-2.6.4-.8 0-1.3-.2-1.6-.4-.5-.4-1.3-.6-2-.6-1.6 0-3.1 1.1-3.6 2.6-.2.6-.3 1.3-.3 2 0 .7.1 1.3.3 1.9.6 1.6 2.3 2.8 4 2.8h.4c.5 0 .9-.1 1.3-.3.5-.2 1-.4 1.6-.4.9 0 1.6.3 2.3.5.5.2 1.2.4 1.9.4 1.6 0 3.1-1.1 3.6-2.6.2-.6.3-1.3.3-2 0-3-2.4-5.5-5.4-5.5z" />
                </svg>
                Donate with PayPal
              </a>
            </div>

            {/* Thank You Message */}
            <div className={`mt-12 p-6 rounded-lg ${getTailwindClass('bg-red-50')} border ${getTailwindClass('border-red-200')}`}>
              <p className={`text-center ${getTailwindClass('text-gray-700')}`}>
                Thank you for your support! Every contribution helps me continue creating and sharing valuable content.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
