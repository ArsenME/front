$(document).ready(function () {
    // Toggle between Classroom and Equipment booking types
    $('input[name="bookingType"]').change(function () {
        const bookingType = $(this).val();
        if (bookingType === '0') {
            $('#classroomFields').show();
            $('#equipmentFields').hide();
        } else {
            $('#classroomFields').hide();
            $('#equipmentFields').show();
        }
    });

    // Track selected courses and show info
    $('.course-checkbox').change(function () {
        updateSelectedCoursesInfo();
    });

    function updateSelectedCoursesInfo() {
        const selectedCourses = $('.course-checkbox:checked');
        const count = selectedCourses.length;
        const infoDiv = $('#selectedCoursesInfo');

        if (count === 0) {
            infoDiv.html('<div class="alert alert-warning mt-2"><i class="fas fa-exclamation-triangle"></i> Please select at least one course</div>');
        } else {
            let courseNames = [];
            selectedCourses.each(function () {
                const label = $(this).next('label').find('strong').text();
                courseNames.push(label);
            });
            infoDiv.html(`<div class="alert alert-success mt-2">
                <i class="fas fa-check-circle"></i> <strong>${count}</strong> course(s) selected: ${courseNames.join(', ')}
            </div>`);
        }
    }

    // Search for available classrooms
    $('#searchClassrooms').click(function () {
        const date = $('#date').val();
        const startTime = $('#startTime').val();
        const endTime = $('#endTime').val();
        const building = $('#building').val();
        const minCapacity = $('#minCapacity').val();
        const equipmentName = $('#equipmentFilter').val();
        const equipmentQuantity = $('#equipmentQty').val();

        if (!date || !startTime || !endTime) {
            alert('Please fill in date, start time, and end time.');
            return;
        }

        $('#searchClassrooms').prop('disabled', true).html('<i class="fas fa-spinner fa-spin"></i> Searching...');

        $.ajax({
            url: '/Booking/SearchClassrooms',
            type: 'GET',
            data: {
                date: date,
                startTime: startTime,
                endTime: endTime,
                building: building,
                minCapacity: minCapacity,
                equipmentName: equipmentName,
                equipmentQuantity: equipmentQuantity
            },
            success: function (response) {
                $('#searchClassrooms').prop('disabled', false).html('<i class="fas fa-search"></i> Search Classrooms');
                if (response.success) {
                    displayClassrooms(response.classrooms);
                } else {
                    alert(response.message);
                }
            },
            error: function () {
                $('#searchClassrooms').prop('disabled', false).html('<i class="fas fa-search"></i> Search Classrooms');
                alert('Error searching for classrooms.');
            }
        });
    });

    function displayClassrooms(classrooms) {
        const listDiv = $('#classroomList');
        listDiv.empty();

        if (classrooms.length === 0) {
            listDiv.html('<div class="alert alert-warning">No available classrooms found matching your criteria.</div>');
            $('#classroomResults').show();
            return;
        }

        classrooms.forEach(function (classroom) {
            // Build equipment list from ClassroomEquipments
            let equipmentHTML = '';
            if (classroom.equipment && classroom.equipment.length > 0) {
                const equipmentItems = classroom.equipment.map(e =>
                    `<span class="badge bg-info me-1">${e.name}: ${e.quantity}</span>`
                ).join('');
                equipmentHTML = `<div class="mt-2"><strong>Equipment:</strong><br>${equipmentItems}</div>`;
            } else {
                equipmentHTML = '<div class="mt-2"><span class="text-muted">No equipment available</span></div>';
            }

            const card = `
                <div class="card mb-2 classroom-card" data-id="${classroom.id}">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-md-9">
                                <h6 class="mb-1">
                                    <i class="fas fa-door-open text-primary"></i> 
                                    ${classroom.building} - Room ${classroom.roomNumber}
                                </h6>
                                <p class="mb-1">
                                    <i class="fas fa-users text-secondary"></i> 
                                    <strong>Capacity:</strong> ${classroom.capacity} students
                                </p>
                                ${equipmentHTML}
                                ${classroom.additionalNotes ? `<p class="mb-0 mt-2 small text-muted"><i class="fas fa-info-circle"></i> ${classroom.additionalNotes}</p>` : ''}
                            </div>
                            <div class="col-md-3 text-end">
                                <button type="button" class="btn btn-primary select-classroom" data-id="${classroom.id}">
                                    <i class="fas fa-check"></i> Select
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            listDiv.append(card);
        });

        $('#classroomResults').show();
    }

    // Select classroom
    $(document).on('click', '.select-classroom', function () {
        const classroomId = $(this).data('id');
        $('#selectedClassroom').val(classroomId);

        $('.classroom-card').removeClass('border-success border-3');
        $(this).closest('.classroom-card').addClass('border-success border-3');

        $('.select-classroom').each(function () {
            $(this).html('<i class="fas fa-check"></i> Select')
                .removeClass('btn-success')
                .addClass('btn-primary')
                .prop('disabled', false);
        });

        $(this).html('<i class="fas fa-check-circle"></i> Selected')
            .removeClass('btn-primary')
            .addClass('btn-success')
            .prop('disabled', true);
    });

    // Check equipment availability
    $('#equipmentSelect, #date, #startTime, #endTime').change(function () {
        const equipmentId = $('#equipmentSelect').val();
        const date = $('#date').val();
        const startTime = $('#startTime').val();
        const endTime = $('#endTime').val();

        if (equipmentId && date && startTime && endTime) {
            $.ajax({
                url: '/Booking/CheckEquipmentAvailability',
                type: 'GET',
                data: {
                    equipmentId: equipmentId,
                    date: date,
                    startTime: startTime,
                    endTime: endTime
                },
                success: function (response) {
                    if (response.success) {
                        $('#equipmentAvailability')
                            .removeClass('alert-danger')
                            .addClass('alert-success')
                            .html(`<i class="fas fa-check-circle"></i> Available quantity: ${response.availableQuantity}`)
                            .show();
                        $('#quantity').attr('max', response.availableQuantity);
                    } else {
                        $('#equipmentAvailability')
                            .removeClass('alert-success')
                            .addClass('alert-danger')
                            .html(`<i class="fas fa-times-circle"></i> Equipment not available`)
                            .show();
                    }
                }
            });
        }
    });

    // Submit booking form
    $('#bookingForm').submit(function (e) {
        e.preventDefault();

        const bookingType = $('input[name="bookingType"]:checked').val();
        const date = $('#date').val();
        const startTime = $('#startTime').val();
        const endTime = $('#endTime').val();
        const notes = $('#notes').val();

        let data = {
            Type: bookingType,
            Date: date,
            StartTime: startTime,
            EndTime: endTime,
            Notes: notes
        };

        // Classroom booking
        if (bookingType === '0') {
            const selectedClassroom = $('#selectedClassroom').val();

            // Collect all selected course IDs
            const selectedCourseIds = [];
            $('.course-checkbox:checked').each(function () {
                selectedCourseIds.push(parseInt($(this).val()));
            });

            if (selectedCourseIds.length === 0) {
                alert('Please select at least one course for classroom booking.');
                return;
            }

            if (!selectedClassroom) {
                alert('Please select a classroom.');
                return;
            }

            data.ClassroomId = selectedClassroom;
            data.CourseIds = selectedCourseIds;
        }
        // Equipment booking
        else {
            const equipmentId = $('#equipmentSelect').val();
            const quantity = $('#quantity').val();
            const equipmentClassroom = $('#equipmentClassroom').val();

            if (!equipmentId || !quantity) {
                alert('Please select equipment and specify quantity.');
                return;
            }

            data.EquipmentId = equipmentId;
            data.Quantity = quantity;
            if (equipmentClassroom) {
                data.EquipmentForClassroom = equipmentClassroom;
            }
        }

        // Get anti-forgery token
        const token = $('input[name="__RequestVerificationToken"]').val();

        $('#submitBtn').prop('disabled', true).html('<i class="fas fa-spinner fa-spin"></i> Creating...');

        $.ajax({
            url: '/Booking/Create',
            type: 'POST',
            data: data,
            headers: {
                'RequestVerificationToken': token
            },
            success: function (response) {
                if (response.success) {
                    alert(response.message);
                    window.location.href = '/Booking/Index';
                } else {
                    alert(response.message);
                    $('#submitBtn').prop('disabled', false).html('<i class="fas fa-check"></i> Create Booking');
                }
            },
            error: function () {
                alert('An error occurred. Please try again.');
                $('#submitBtn').prop('disabled', false).html('<i class="fas fa-check"></i> Create Booking');
            }
        });
    });
});