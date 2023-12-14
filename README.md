# React Native Restaurant Finder Uygulaması

Bu uygulama, React Native kullanılarak geliştirilmiş bir restoran bulucu uygulamasıdır. Uygulama, Yelp API'sini kullanarak fiyatlarına göre restoranları üç farklı kategoride listeleyerek kullanıcılara sunar: "Ucuz", "Uygun" ve "Pahalı".

## Nasıl Çalıştırılır

1. Proje dosyalarını bilgisayarınıza klonlayın.
2. Gerekli bağımlılıkları yüklemek için terminalde proje klasörüne gidin ve `npm install` komutunu çalıştırın.
3. Yelp API'ye erişim için API_URL ve API_TOKEN değişkenlerini ayarlamak için `hooks/useResult.js` dosyasını düzenleyin. API detayları için Yelp API geliştirici sitesini ziyaret edebilirsiniz.

## Kullanım

Uygulama, kullanıcıya farklı konumlarda restoran arama imkanı sunar. Arama konumunu değiştirmek için `hooks/useResult.js` dosyasındaki `location` kısmını güncelleyebilirsiniz.

## Restoran Kategorileri

- **Ucuz:** Bu kategoride fiyatı uygun olan restoranlar listelenir.
- **Uygun:** Orta seviye fiyat aralığındaki restoranlar burada bulunur.
- **Pahalı:** Daha yüksek fiyat aralığına sahip restoranlar bu kategoride yer alır.

## Restoran Detayları

Her restoranın detay sayfasında aşağıdaki bilgilere erişilebilir:

- Restoran İsmi
- Telefon Numarası
- Açık/Kapalı Durumu

