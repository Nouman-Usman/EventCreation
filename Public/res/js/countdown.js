$('.countdown-timer').countdown({
    date: "September 20, 2024 10:00:00",

    render: function(data) {
        $(".days .value").html(this.leadingZeros(data.days, 0));
        $(".hours .value").html(this.leadingZeros(data.hours, 0));
        $(".minutes .value").html(this.leadingZeros(data.min, 0));
        $(".seconds .value").html(this.leadingZeros(data.sec, 0));
    }
});
