// Import hàm encode và decode từ các file tương ứng
const { decode } = require('./decode.js');
const { encode } = require('./encode.js');

function main() {
    try {
        // Test hàm encode
        const testData = {
            queryString: "WebIdLastTime=1757267548&aid=1988&app_name=tiktok_web&browser_language=vi-VN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F139.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&data_collection_enabled=true&device_id=7547406633572550152&device_platform=web_pc&focus_state=true&from_page=user&history_len=12&is_fullscreen=false&is_page_visible=true&language=vi-VN&locateItemID=7544735011992243474&needAudienceControl=true&odinId=7097957805269844994&os=windows&priority_region=VN&region=VN&root_referer=https%3A%2F%2Fwww.tiktok.com%2F&screen_height=1080&screen_width=1920&secUid=&tz_name=Etc%2FGMT-7&uniqueId=jle1985&user=%5Bobject%20Object%5D&user_is_login=true&verifyFp=verify_mf9zq5ks_nZJtS1lC_YYZX_4f1U_8P5b_BuKotyxvYuTq&webcast_language=vi-VN&msToken=WCbFJ6EFY0tJg9cNtkLh2oYcJjFiim2WUb6Xwgj6gjg-RGwNq5MZ2e0Q9uLK2XpKWuEH5G-Ja8UcI3gjgG0RGCFGG2xlfkC5sZeiOA28EkiRG0h5iECefo2ip3MotRJXQKkN2X0xI0wKHkBmlkY=",
            body: "",
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36"
        };
        
        const encodeResult = encode(testData);
        console.log('Kết quả encode:', encodeResult);

        // Test hàm decode
        // const encoded = 'MPtfbpXGX-IKsSybpg1gHDH-Z4QbEYaaAoS1Dccoe7RIalC1dh-SO9rzclzYrKAjo-xM/jqFlJs2Ppm/Nd-MvflN-mJEC0MPhAoAAfvLzv1n-RbjAPzRutCyPu-Sx65-4ElCXv0c96pZcbgso7MbEnPhsRzuc6x0l02iqJeazFiVAO4S9TX9gckeHq4w57b5jKMkrp9UKCzWO4TiGPwHth566cDJs2pS0t5Kr8s9bxNTqDKqRng0K3mFE-o0jkJVInR1nb6dJdNV';
        const encoded = encodeResult
        const decodedResult = decode(encoded);
        console.log('Kết quả decode:', decodedResult);

        const encoded1 = 'MwkyLpyck3Ow0cg6Z52V9xxyTPDoEjYcqZ4olx192WQ1yFaLEHmtISET-vG-REojE1oRfqdXsUUKEfZOo8NVPGo22lfGHT1-Ob8Fq/m7O-6ojYN2qen3p745cZt/3J1BRjWcW2VfzcMz88P5qZppo2D3rT1KVXrzJ7HHUBRs6TQtMkRuFuFCtAzkYEBjwtkDjM40WdNhPqGBp9p5sZ7LN1W0Ud18T4xGMxzto85HAhTsh9cdC4kWv9VtBb4F3B2JYHNiiVDuv08PQ0svgKlyhKMIMAx40WdZdWw1QIZxE/vt';
        const decodedResult1 = decode(encoded1);
        console.log('Kết quả decode:1', decodedResult1);



    } catch (error) {
        console.error('Có lỗi xảy ra:', error.message);
    }
}

// Chạy hàm main
main();
