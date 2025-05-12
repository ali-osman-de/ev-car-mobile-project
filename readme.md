# EV Car Mobile Project
Bu proje, elektrikli araç sahipleri ve elektrikli araç alacak kişilere birer rehber olması amacıyla geliştirilmiş bir mobil uygulamadır. Kullanıcıların araç bilgilerini görüntüleyebilmesi ve yönetebilmesi amaçlanmıştır. Harita üzerinde en yakın şarj istasyonunu bularak gitmesi amaçlanmıştır. Projenin ilerleyen kısımlarında araç karşılaştırma ve birçok özellik eklenebilir.

## Özellikler

- Yapay zeka destekli bot ile araç önerisi alma uygun aracı bulma
- Şarj istasyonlarını canlı bir şekilde haritadan erişim 
- Tüm elektrikli araçların detaylarına erişim
- Elektrikli araçların kategori bazlı detaylarına erişim
- Modern React yapıları (Hooks, Redux Toolkit) kullanılmıştır  


## Kullanılan Teknolojiler

- [React Native](https://reactnative.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Navigation](https://reactnavigation.org/)
- [Expo Go](https://expo.dev/)


## Dosya Yapısı

```
/ev-car-mobile-project
│
├── src/
│   ├── screens/   
│   │    ├── AllProducts/ 
│   │    │    ├── AllProduct.js # Cars Screen 
│   │    │    └── CarDetails.js
│   │    ├── Home/
│   │    │    ├── AICarDreamer.js 
│   │    │    ├── Categories.js 
│   │    │    ├── ChargerMap.js
│   │    │    ├── HeroContent.js
│   │    │    ├── HomeScreen.js  # Home Screen 
│   │    │    ├── SearchResults.js 
│   │    │    ├── AICarDreamer/ 
│   │    │    │    └── AIContent.js 
│   │    │    └── Categories/
│   │    │         └── SelectedCategory.js 
│   │    └── Settings/
│   │         ├── Content.js 
│   │         ├── Privacy.js 
│   │         ├── Profile.js 
│   │         └── Settings.js # Settings Screen
│   │    
│   ├── navigator/     
│   │    ├── AllProductsStack.js      
│   │    ├── HomeStack.js    
│   │    ├── NavigationRoute.js     
│   │    └── SettingsStack.js      
│   └── redux/
│        ├── carSlice.js
│        ├── carByCategorySlice.js       
│        └── store.js  
│   
│
├── assets/              
├── App.js               
└── package.json         
```

## Backend Hakkında

Projede, kendi geliştirdiğim bir backend servisi kullanılmaktadır. Bu servis ile kullanıcı ve araç verileri güvenli bir şekilde yönetilmektedir. Tüm veri işlemleri (ekleme, silme, güncelleme, listeleme) bu backend üzerinden yapılmaktadır. Bu backend servisi canlı bir sunucu üzerinde çalışmaktadır ve server yavaş olduğundan dolayı servisin yüklenmesi bazen uzun sürebilmektedir.

## Kurulum

1. Bağımlılıkları yükleyin:
    ```
    npm install
    ```
2. Uygulamayı başlatın:
    ```
    npm start
    ```
