// Import hàm encode và decode từ các file tương ứng
const { decode } = require('./decode.js');
const { encode } = require('./encode.js');

function main() {
    try {
        // Test hàm encode
        const testData = {
            queryString: "next=https%3A%2F%2Fwww.tiktok.com&token=aK47qn3QbcoE1lOgz24Ln_7zpI3_Yoe6LjqKcL4rysE%3D_my&multi_login=1&did=7546283577668027922&locale=vi-VN&app_language=vi&aid=1459&account_sdk_source=web&sdk_version=2.1.11-tiktokbeta.3&language=vi&verifyFp=verify_mf5o2d0k_s1B9vhOs_zeAb_4ocP_BsJY_6X4tfBCMbz1w&shark_extra=%7B%22aid%22:1459,%22app_name%22:%22Tik_Tok_Login%22,%22channel%22:%22tiktok_web%22,%22device_platform%22:%22web_pc%22,%22device_id%22:%227546283577668027922%22,%22region%22:%22VN%22,%22priority_region%22:%22%22,%22os%22:%22windows%22,%22referer%22:%22https:%2F%2Fwww.tiktok.com%2F%22,%22root_referer%22:%22https:%2F%2Fwww.tiktok.com%2F%22,%22cookie_enabled%22:true,%22screen_width%22:1920,%22screen_height%22:1080,%22browser_language%22:%22vi-VN%22,%22browser_platform%22:%22Win32%22,%22browser_name%22:%22Mozilla%22,%22browser_version%22:%225.0+(Windows+NT+10.0%3B+Win64%3B+x64)+AppleWebKit%2F537.36+(KHTML,+like+Gecko)+Chrome%2F139.0.0.0+Safari%2F537.36%22,%22browser_online%22:true,%22verifyFp%22:%22verify_mf5o2d0k_s1B9vhOs_zeAb_4ocP_BsJY_6X4tfBCMbz1w%22,%22app_language%22:%22vi-VN%22,%22webcast_language%22:%22vi-VN%22,%22tz_name%22:%22Etc%2FGMT-7%22,%22is_page_visible%22:true,%22focus_state%22:true,%22is_fullscreen%22:false,%22history_len%22:2,%22user_is_login%22:false,%22data_collection_enabled%22:false%7D&msToken=NRQuWK0avmHABSRK9tbS7TZNklGoLmmtLRorowiI1cD2DwdhO6BYXDG1yLLHHmvDyUev_fC_QRyjdcFI2PFw3V19KiDGqfxQNWR0GRccNL0IxkCzDdsGXvXCOz31Amyf888mE8a-eSlAer9EPB7i",
            body: "",
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36"
        };
        
        const encodeResult = encode(testData);
        console.log('Kết quả encode:', encodeResult);

        // Test hàm decode
        const encoded = 'M8LEWw7nt-9S6G71ldfPOkz1rpZr3OA3aIu73lg2RF4v-ULnkLEcI6aTUuB2bUhv3dBa02Z1tcLb6yRcngSoV7wsVVEzf4fx/VzNCXGX1hc2OoL/2YkOTYllcMyfMFYLSv-qgXT2B3Hfj-rtP9JoYWGnPIr0ijyaMtw/eGxjmIChuQ5s4FUtDOyHvdBVjHD1gUsH6i1/WR11NXNwjXZAIRzjd2kxigSsCmJGKi-gwD4GqeKcj1N06zAxlHgE1JG-lBsk-89JFDS/YQl--68Vj17rY1-VzHicoU-WRxr8-JAF';
        const decodedResult = decode(encoded);
        console.log('Kết quả decode:', decodedResult);
    } catch (error) {
        console.error('Có lỗi xảy ra:', error.message);
    }
}

// Chạy hàm main
main();
