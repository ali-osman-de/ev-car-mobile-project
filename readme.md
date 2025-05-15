# EV Car Mobile Project
Bu proje, elektrikli araç sahipleri ve elektrikli araç alacak kişilere birer rehber olması amacıyla geliştirilmiş bir mobil uygulamadır. Kullanıcıların araç bilgilerini görüntüleyebilmesi ve yönetebilmesi amaçlanmıştır. Harita üzerinde en yakın şarj istasyonunu bularak gitmesi amaçlanmıştır. Projenin ilerleyen kısımlarında araç karşılaştırma ve birçok özellik eklenebilir. Ayrıca bu proje Yıldız Teknik Üniversitesi BTO4132 kodlu Mobil Programlama Dersi Bitirme Projesi olarak tasarlanmış ve kodlanmıştır.

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

Projede, kendi geliştirdiğim bir backend servisi kullanılmaktadır. Bu servis ile kullanıcı ve araç verileri güvenli bir şekilde yönetilmektedir. Tüm veri işlemleri (ekleme, silme, güncelleme, listeleme) bu backend üzerinden yapılmaktadır. Bu backend servisi canlı bir sunucu üzerinde çalışmaktadır ve server yavaş olduğundan dolayı servisin yüklenmesi bazen uzun sürebilmektedir. Ayrıca EvCarBackend canlı servis kısmında yapılabilecek herhangi bir CRUD işlemi geçicidir, OnRender kısmı ücretsiz pakette Database değişikliğine anlık izin vermektedir.

- [EvCarBackendLiveSwagger](https://evcarbackend.onrender.com/swagger/)
- [EvCarBackendGithubRepo](https://github.com/ali-osman-de/evCarBackend)


## Kurulum

1. Bağımlılıkları yükleyin:
    ```
    npm install
    ```
2. Uygulamayı başlatın:
    ```
    npm start
    ```

## Projeye Ait Görseller

<p align="center">
  <img src="https://github.com/user-attachments/assets/8478a6a0-b2fe-4410-b45c-94dc958e8d4f" width="200"/>
  <img src="https://github.com/user-attachments/assets/f9ab3575-bd15-4b75-bfeb-192cda3c20e5" width="200"/><br>
  <img src="https://github.com/user-attachments/assets/ba5947ae-d73a-419c-aa63-2e7b7661e674" width="200"/>
  <img src="https://github.com/user-attachments/assets/9c10b977-565d-4f25-b55b-3869486517ba" width="200"/><br>
  <img src="https://github.com/user-attachments/assets/6b2cd908-3807-4096-a12a-03fa3185f03a" width="200"/>
  <img src="https://github.com/user-attachments/assets/3577140b-a104-4ac2-84e9-28461d58862a" width="200"/>
</p>

