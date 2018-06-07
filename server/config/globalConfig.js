var globalConfig = {
    NoOfBuildingForSearch : 10 ,
    MomentTimeZone: 'Asia/Calcutta|Asia/Kolkata',
    OutlookPreferTimeZone: 'outlook.timezone="India Standard Time"',
    PixToMeterConversation : 2 ,
    BaseTimeFor1Meter: 0.72, // for 5000 meter = 3600 Seconds approx;                                    
    BaseFloorTime: 30,// for 1 Floor to another floor 30 seconds
    SendNotification: true,
    CalculateDistanceGoogleAPI: true,
    DistanceMatrixURL: 'https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&mode=walking&origins={source}&destinations={destination}&key=AIzaSyDUVQOj-9bIb8ThVNh9lwJ-Opnq4aPKi1Y',
    GoogleDirectionURL: 'https://maps.googleapis.com/maps/api/directions/json?mode=walking&origin={source}&destination={destination}&key=AIzaSyAi6sywcoIqtozIVDBF7uLw4lKnUMhDicg',
    TotalRecord: 999,
    EnableConcurrentCheck: true,
    CacheTimeinMS: 60000
}
module.exports = globalConfig;