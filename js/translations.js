const translations = {
    en: {
        hero: {
            welcomeUser: "Welcome"
        },
        dashboard: {
            totalBookings: "Total Bookings",
            pending: "Pending Approval",
            users: "Users",
            classrooms: "Classrooms",
            room: "Room",
            teacher: "Teacher",
            date: "Date",
            time: "Time",
            quantity: "Quantity",
            approve: "Approve",
            reject: "Reject",
            cancel: "Cancel",
            noBookings: "No bookings found.",
            alertApproved: "Booking approved!",
            alertRejected: "Booking rejected!",

            status: {
                confirmed: "Confirmed",
                pending: "Pending",
                rejected: "Rejected",
                cancelled: "Cancelled"
            },

            myBookingsStat: "My Bookings",
            pendingStat: "Pending",
            confirmedStat: "Confirmed",

            teacherCreate: {
                title: "Need to Book a Resource?",
                subtitle: "Create a new booking for classrooms or equipment",
                button: "Create New Booking"
            },

            department: "Department",
            code: "Code",
            classroom: "Classroom",
            day: "Day",
            time: "Time",
            instructor: "Instructor",
            semester: "Semester",
            note: "Note:",
            noteText: "Rooms used in these schedules will not be available for booking during their scheduled times."

        },
        page: {
            dashboardTitle: "Dashboard - MetaClass"
        },
        departments: {
            cs: "Computer Science",
            physics: "Physics"
        },
        days: {
            monday: "Monday",
            wednesday: "Wednesday"
        },
        rooms: {
            room201: "Room 201 - Engineering Building",
            room102: "Room 102 - Science Building"
        },
        nav: {
            dashboard: "Dashboard",
            newBooking: "New Booking",
            myBookings: "My Bookings",
            admin: "Admin",
            account: "Account"
        },
        admin: {
            panel: "Admin Panel",
            manageUsers: "Manage Users",
            manageBookings: "Manage Bookings",
            classrooms: "Classrooms",
            equipment: "Equipment",
            schedules: "Schedules",
            manageUsersDesc: "Add, edit, or remove users and reset passwords",
            manageBookingsDesc: "Approve, reject, or delete bookings",
            classroomsDesc: "View and manage classroom inventory",
            equipmentDesc: "Manage equipment inventory and availability",
            schedulesDesc: "View and manage predefined class schedules",
            dashboardDesc: "View system statistics and recent activity"
        },
        classrooms: {
            title: "Classrooms",
            addClassroom: "Add New Classroom",
            room: "Room",
            building: "Building",
            capacity: "Capacity",
            features: "Features",
            active: "Active",
            inactive: "Inactive",
            backToAdmin: "Back to Admin Panel",
            feature_projector: "Projector",
            feature_ac: "AC",
            feature_whiteboard: "Whiteboard",
            feature_smarttv: "Smart TV",
            feature_sound: "Sound System",
            create: "Create New Classroom",
            name: "Classroom Name",
            capacity: "Capacity",
            location: "Location",
            equipment: "Equipment",
            equipmentPlaceholder: "Equipment name (e.g., Projector)",
            count: "Count",
            remove: "Remove",
            createBtn: "Create Classroom",
            cancel: "Cancel",
            alertMissingEquipment: "Please enter equipment name and count.",
            alertCreated: "Classroom created successfully!",
            alertError: "Error creating classroom."
        },

        equipment: {
            title: "Equipment Inventory",
            addEquipmentBtn: "Add New Equipment",
            name: "Name",
            category: "Category",
            totalQuantity: "Total Quantity",
            available: "Available",
            description: "Description",
            status: "Status",
            active: "Active",
            inactive: "Inactive",
            backToAdmin: "Back to Admin Panel",
            projector: "Projector",
            pc: "PC",
            labMicroscope: "Lab Microscope",
            avEquipment: "AV Equipment",
            computer: "Computer",
            biology: "Biology",
            fullHDProjector: "Full HD Projector",
            microComputer: "MicroComputer",
            microscopeDetails: "Magnification 40x-1000x",
            createTitle: "Create New Equipment",
            nameLabel: "Equipment Name *",
            typeLabel: "Equipment Type *",
            typeSelect: "-- Select Type --",
            other: "Other",
            quantityLabel: "Quantity *",
            createBtn: "Create Equipment",
            cancelBtn: "Cancel",
            alertCreated: "Equipment successfully created!"
        },

        roles: {
            teacher: "Teacher",
            admin: "Admin"
    },

        user: {
            manageUsers: "Manage Users",
            addUser: "Add New User",
            fullName: "Full Name",
            email: "Email",
            role: "Role",
            actions: "Actions",
            edit: "Edit",
            reset: "Reset",
            delete: "Delete",
            back: "Back to Admin Panel",
            editUserTitle: "Edit User",
            firstName: "First Name",
            lastName: "Last Name",
            saveChanges: "Save Changes",
            alertUpdated: "User updated!",
            password: "Password",
            alertUpdated: "User created!"
        },

        booking: {
            createBookingTitle: "Create New Booking",
            bookingType: "Booking Type",
            classroom: "Classroom",
            equipment: "Equipment",
            date: "Date",
            startTime: "Start Time",
            endTime: "End Time",
            departments: "Departments",
            students: "Students",
            searchClassrooms: "Search Available Classrooms",
            building: "Building",
            allBuildings: "All Buildings",
            mainBuilding: "Main Building",
            building5: "Building 5",
            minCapacity: "Min Capacity",
            requiredEquipment: "Required Equipment",
            anyEquipment: "Any Equipment",
            minQuantity: "Min Quantity",
            searchBtn: "Search Classrooms",
            availableClassrooms: "Available Classrooms",
            selectEquipment: "Select Equipment",
            selectEquipmentPlaceholder: "Select Equipment",
            quantity: "Quantity",
            buildingOptional: "Building (Optional)",
            classroomOptional: "Classroom (Optional)",
            notes: "Notes",
            createBookingBtn: "Create Booking",
            cancelBtn: "Cancel"
        },

        account: {
            themeToggle: "Dark/Light Mode",
            changePassword: "Change Password",
            logout: "Logout"
        },
        hero: {
            welcomeUser: "Welcome",
            dashboardType: "Dashboard Type"
        },
        bookings: {
            recent: "Recent Bookings",
            viewAll: "View All"
        },
        modal: {
            common: {
                cancel: "Cancel",
                close: "Close"
            },
            reject: {
                title: "Reject Booking",
                reason: "Rejection Reason",
                btn: "Reject Booking"
            },
            cancel: {
                title: "Cancel Booking",
                reason: "Reason",
                btn: "Cancel Booking"
            }
        },
        notifications: {
            title: "Notifications",
            none: "No notifications",
            markAllRead: "Mark All as Read"
        },
        footer: {
            copyright: "© 2025 - MetaClass University Booking System",
            poweredBy: "Powered by MetaClass Technology"
        }
    },

    ru: {
        hero: {
            welcomeUser: "Добро пожаловать"
        },
        dashboard: {
            totalBookings: "Всего бронирований",
            pending: "Ожидают подтверждения",
            users: "Пользователи",
            classrooms: "Аудитории",
            room: "Аудитория",
            teacher: "Преподаватель",
            date: "Дата",
            time: "Время",
            quantity: "Количество",
            approve: "Одобрить",
            reject: "Отклонить",
            cancel: "Отменить",
            noBookings: "Бронирования не найдены.",
            alertApproved: "Бронирование одобрено!",
            alertRejected: "Бронирование отклонено!",

            status: {
                confirmed: "Подтверждено",
                pending: "В ожидании",
                rejected: "Отклонено",
                cancelled: "Отменено"
            },

            myBookingsStat: "Мои бронирования",
            pendingStat: "В ожидании",
            confirmedStat: "Подтверждено",

            teacherCreate: {
                title: "Хотите забронировать ресурс?",
                subtitle: "Создайте новое бронирование аудитории или оборудования",
                button: "Создать бронирование"
            },

            department: "Факультет",
            code: "Код",
            classroom: "Аудитория",
            day: "День",
            time: "Время",
            instructor: "Преподаватель",
            semester: "Семестр",
            note: "Примечание:",
            noteText: "Аудитории, используемые по расписанию, будут недоступны для бронирования в это время."

        },
        page: {
            dashboardTitle: "Панель управления - MetaClass"
        },
        departments: {
            cs: "Компьютерные науки",
            physics: "Физика"
        },
        days: {
            monday: "Понедельник",
            wednesday: "Среда"
        },
        rooms: {
            room201: "Аудитория 201 - Инженерное здание",
            room102: "Аудитория 102 - Научное здание"
        },
        nav: {
            dashboard: "Панель",
            newBooking: "Новое бронирование",
            myBookings: "Мои бронирования",
            admin: "Админ",
            account: "Аккаунт"
        },
        admin: {
            panel: "Админ-панель",
            manageUsers: "Управление пользователями",
            manageBookings: "Управление бронированием",
            classrooms: "Аудитории",
            equipment: "Оборудование",
            schedules: "Расписание",
            manageUsersDesc: "Добавлять, изменять, удалять пользователей и сбрасывать пароли",
            manageBookingsDesc: "Одобрять, отклонять или удалять бронирования",
            classroomsDesc: "Просмотр и управление аудиториями",
            equipmentDesc: "Управление оборудованием и доступностью",
            schedulesDesc: "Просмотр и управление расписаниями",
            dashboardDesc: "Просмотр статистики и активности системы"
        },
        classrooms: {
            title: "Аудитории",
            addClassroom: "Добавить аудиторию",
            room: "Аудитория",
            building: "Здание",
            capacity: "Вместимость",
            features: "Оснащение",
            active: "Активна",
            inactive: "Неактивна",
            backToAdmin: "Назад в панель администратора",
            
            feature_projector: "Проектор",
            feature_ac: "Кондиционер",
            feature_whiteboard: "Доска",
            feature_smarttv: "Смарт ТВ",
            feature_sound: "Аудиосистема",
            create: "Создать аудиторию",
            name: "Название аудитории",
            capacity: "Вместимость",
            location: "Местоположение",
            equipment: "Оборудование",
            equipmentPlaceholder: "Название оборудования (например, проектор)",
            count: "Количество",
            remove: "Удалить",
            createBtn: "Создать аудиторию",
            cancel: "Отмена",
            alertMissingEquipment: "Пожалуйста, введите название оборудования и количество.",
            alertCreated: "Аудитория успешно создана!",
            alertError: "Ошибка при создании аудитории."
        },
        
        equipment: {
            title: "Инвентаризация оборудования",
            addEquipmentBtn: "Добавить новое оборудование",
            name: "Название",
            category: "Категория",
            totalQuantity: "Общее количество",
            available: "Доступно",
            description: "Описание",
            status: "Статус",
            active: "Активно",
            inactive: "Неактивно",
            backToAdmin: "Назад в панель администратора",            
            projector: "Проектор",
            pc: "ПК",
            labMicroscope: "Лабораторный микроскоп",           
            avEquipment: "AV оборудование",
            computer: "Компьютер",
            biology: "Биология",
            fullHDProjector: "Full HD проектор",
            microComputer: "Микрокомпьютер",
            microscopeDetails: "Увеличение 40x-1000x",
            createTitle: "Создать новое оборудование",
            nameLabel: "Название оборудования *",
            typeLabel: "Тип оборудования *",
            typeSelect: "-- Выберите тип --",
            other: "Другое",
            quantityLabel: "Количество *",
            createBtn: "Создать оборудование",
            cancelBtn: "Отмена",
            alertCreated: "Оборудование успешно создано!"
        },

        roles: {
            teacher: "Преподаватель",
            admin: "Админ"
        },
        
        user: {
            manageUsers: "Управление пользователями",
            addUser: "Добавить пользователя",
            fullName: "ФИО",
            email: "Email",
            role: "Роль",
            actions: "Действия",
            edit: "Редактировать",
            reset: "Сбросить",
            delete: "Удалить",
            back: "Назад в панель администратора",
            editUserTitle: "Редактировать пользователя",
            firstName: "Имя",
            lastName: "Фамилия",
            saveChanges: "Сохранить изменения",
            alertUpdated: "Пользователь обновлён!",
            password: "Пароль",
            alertUpdated: "Пользователь создан!"
        },

        booking: {
            createBookingTitle: "Создать новое бронирование",
            bookingType: "Тип бронирования",
            classroom: "Аудитория",
            equipment: "Оборудование",
            date: "Дата",
            startTime: "Время начала",
            endTime: "Время окончания",
            departments: "Факультеты",
            students: "Студенты",
            searchClassrooms: "Поиск доступных аудиторий",
            building: "Здание",
            allBuildings: "Все здания",
            mainBuilding: "Главное здание",
            building5: "Здание 5",
            minCapacity: "Мин. вместимость",
            requiredEquipment: "Необходимое оборудование",
            anyEquipment: "Любое оборудование",
            minQuantity: "Мин. количество",
            searchBtn: "Поиск аудиторий",
            availableClassrooms: "Доступные аудитории",
            selectEquipment: "Выберите оборудование",
            quantity: "Количество",
            optional: "Необязательно",
            notes: "Примечания",
            createBtn: "Создать бронирование",
            cancelBtn: "Отмена"
        },

        account: {
            themeToggle: "Темная/Светлая тема",
            changePassword: "Изменить пароль",
            logout: "Выйти"
        },
        hero: {
            welcomeUser: "Добро пожаловать",
            dashboardType: "Тип панели"
        },
        bookings: {
            recent: "Недавние бронирования",
            viewAll: "Посмотреть все"
        },
        modal: {
            common: {
                cancel: "Отмена",
                close: "Закрыть"
            },
            reject: {
                title: "Отклонить бронирование",
                reason: "Причина отклонения",
                btn: "Отклонить"
            },
            cancel: {
                title: "Отменить бронирование",
                reason: "Причина",
                btn: "Отменить бронирование"
            }
        },
        notifications: {
            title: "Уведомления",
            none: "Нет уведомлений",
            markAllRead: "Отметить все как прочитанные"
        },
        footer: {
            copyright: "© 2025 - Система бронирования MetaClass",
            poweredBy: "Разработано MetaClass Technology"
        }
    },

    hy: {
        hero: {
            welcomeUser: "Բարի գալուստ"
        },
        dashboard: {
            totalBookings: "Ընդհանուր ամրագրումներ",
            pending: "Սպասում է հաստատման",
            users: "Օգտվողներ",
            classrooms: "Դասասենյակներ",
            room: "Սենյակ",
            teacher: "Դասախոս",
            date: "Ամսաթիվ",
            time: "Ժամ",
            quantity: "Քանակ",
            approve: "Հաստատել",
            reject: "Մերժել",
            cancel: "Չեղարկել",
            noBookings: "Ամրագրումներ չեն գտնվել։",
            alertApproved: "Ամրագրումը հաստատվեց!",
            alertRejected: "Ամրագրումը մերժվեց!",

            status: {
                confirmed: "Հաստատված",
                pending: "Սպասող",
                rejected: "Մերժված",
                cancelled: "Չեղարկված"
            },

            myBookingsStat: "Իմ ամրագրումները",
            pendingStat: "Սպասող",
            confirmedStat: "Հաստատված",

            teacherCreate: {
                title: "Ցանկանու՞մ եք գրանցել ռեսուրս։",
                subtitle: "Ստեղծեք նոր ամրագրում լսարանների կամ սարքավորման համար",
                button: "Ստեղծել Ամրագրում"
            },

            department: "Ֆակուլտետ",
            code: "Կոդ",
            classroom: "Դասասենյակ",
            day: "Օր",
            time: "Ժամ",
            instructor: "Դասախոս",
            semester: "Սեմեստր",
            note: "Նշում՝",
            noteText: "Այս դասացուցակներում օգտագործվող սենյակները ամրագրման համար հասանելի չեն իրենց նախատեսված ժամանակներում։"

        },
        page: {
            dashboardTitle: "Վահանակ - MetaClass"
        },
        departments: {
            cs: "Համակարգչային գիտություններ",
            physics: "Ֆիզիկա"
        },
        days: {
            monday: "Երկուշաբթի",
            wednesday: "Չորեքշաբթի"
        },
        rooms: {
            room201: "Սենյակ 201 - Ճարտարագիտական շենք",
            room102: "Սենյակ 102 - Գիտական շենք"
        },
        nav: {
            dashboard: "Վահանակ",
            newBooking: "Նոր Ամրագրում",
            myBookings: "Իմ Ամրագրումները",
            admin: "Ադմին",
            account: "Հաշիվ"
        },
        admin: {
            panel: "Ադմին Վահանակ",
            manageUsers: "Օգտատերերի կառավարում",
            manageBookings: "Կառավարել ամրագրումները",
            classrooms: "Դասարաններ",
            equipment: "Սարքավորումներ",
            schedules: "Ժամանակացույցեր",
            manageUsersDesc: "Ավելացնել, խմբագրել կամ ջնջել օգտատերերին և վերականգնել գաղտնաբառերը",
            manageBookingsDesc: "Հաստատել, մերժել կամ ջնջել ամրագրումները",
            classroomsDesc: "Դիտել և կառավարել լսարանների ֆոնդը",
            equipmentDesc: "Կառավարել սարքավորումների ֆոնդը և հասանելիությունը",
            schedulesDesc: "Դիտել և կառավարել դասացուցակները",
            dashboardDesc: "Դիտել համակարգի վիճակագրությունը և վերջին գործողությունները"
        },
        classrooms: {
            title: "Դասասենյակներ",
            addClassroom: "Ավելացնել նոր դասասենյակ",
            room: "Սենյակ",
            building: "Շինություն",
            capacity: "Տեղակալություն",
            features: "Հատկություններ",
            active: "Ակտիվ",
            inactive: "Ոչ ակտիվ",
            backToAdmin: "Վերադառնալ կառավարման վահանակ",
            
            feature_projector: "Պրոյեկտոր",
            feature_ac: "Օդորակիչ",
            feature_whiteboard: "Գրատախտակ",
            feature_smarttv: "Խելացի հեռուստացույց",
            feature_sound: "Ձայնային համակարգ",
            create: "Ստեղծել նոր դասասենյակ",
            name: "Դասասենյակի անուն",
            capacity: "Տեղակալություն",
            location: "Վայրում",
            equipment: "Սարքավորումներ",
            equipmentPlaceholder: "Սարքի անուն (օր․ Պրոյեկտոր)",
            count: "Քանակ",
            remove: "Ջնջել",
            createBtn: "Ստեղծել դասասենյակ",
            cancel: "Չեղարկել",
            alertMissingEquipment: "Խնդրում ենք մուտքագրել սարքի անունը և քանակը։",
            alertCreated: "Դասասենյակը հաջողությամբ ստեղծվեց։",
            alertError: "Դասասենյակի ստեղծման ընթացքում սխալ տեղի ունեցավ։"
        },

        equipment: {
            title: "Սարքավորումների ֆոնդ",
            addEquipmentBtn: "Ավելացնել նոր սարքավորում",
            name: "Անուն",
            category: "Կատեգորիա",
            totalQuantity: "Ընդհանուր քանակ",
            available: "Հասանելի",
            description: "Նկարագրություն",
            status: "Կարգավիճակ",
            active: "Ակտիվ",
            inactive: "Ոչ ակտիվ",
            backToAdmin: "Վերադառնալ կառավարման վահանակ",
            
            projector: "Պրոյեկտոր",
            pc: "Համակարգիչ",
            labMicroscope: "Լաբորատոր դասարանի մանրադիտակ",
            
            avEquipment: "Աուդիո-տեսա սարքավորումներ",
            computer: "Համակարգիչ",
            biology: "Կենսաբանություն",
            
            fullHDProjector: "Լրիվ HD պրոյեկտոր",
            microComputer: "Միկրոկոմպյուտեր",
            microscopeDetails: "Մեծացում 40x-1000x",
            createTitle: "Ստեղծել նոր սարքավորում",
            nameLabel: "Սարքի անուն *",
            typeLabel: "Սարքի տեսակը *",
            typeSelect: "-- Ընտրեք տեսակը --",
            other: "Այլ",
            quantityLabel: "Քանակ *",
            createBtn: "Ստեղծել սարքավորում",
            cancelBtn: "Չեղարկել",
            alertCreated: "Սարքավորումը հաջողությամբ ստեղծվեց։"
        },

        roles: {
            teacher: "Դասախոս",
            admin: "Ադմին"
        },

        user: {
            manageUsers: "Օգտատերերի կառավարում",
            addUser: "Ավելացնել նոր օգտատեր",
            fullName: "Ամբողջ անուն",
            email: "Էլ․ փոստ",
            role: "Դեր",
            actions: "Գործողություններ",
            edit: "Խմբագրել",
            reset: "Վերականգնել",
            delete: "Ջնջել",
            back: "Վերադառնալ կառավարման վահանակ",
            editUserTitle: "Օգտատիրոջ խմբագրում",
            firstName: "Անուն",
            lastName: "Ազգանուն",
            saveChanges: "Պահել փոփոխությունները",
            alertUpdated: "Օգտատերը հաջողությամբ թարմացվեց!",
            password: "Գաղտնաբառ",
            alertUpdated: "Օգտատերը հաջողությամբ ստեղծվեց։"
        },

        booking: {
            createBookingTitle: "Ստեղծել նոր ամրագրում",
            bookingType: "Ամրագրման տեսակ",
            classroom: "Դասասենյակ",
            equipment: "Սարքավորում",
            date: "Ամսաթիվ",
            startTime: "Սկիզբ",
            endTime: "Ավարտ",
            departments: "Ֆակուլտետներ",
            students: "Ուսանողներ",
            searchClassrooms: "Փնտրել հասանելի դասասենյակներ",
            building: "Շինություն",
            allBuildings: "Բոլոր շենքերը",
            mainBuilding: "Հիմնական շենք",
            building5: "Շենք 5",
            minCapacity: "Նվազագույն տեղակայում",
            requiredEquipment: "Պահանջվող սարքավորում",
            anyEquipment: "Ցանկացած սարքավորում",
            minQuantity: "Նվազագույն քանակ",
            searchBtn: "Փնտրել դասասենյակները",
            availableClassrooms: "Հասանելի դասասենյակներ",
            selectEquipment: "Ընտրել սարքավորում",
            quantity: "Քանակ",
            optional: "Ընտրովի",
            notes: "Նշումներ",
            createBtn: "Ստեղծել ամրագրում",
            cancelBtn: "Չեղարկել"
        },

        account: {
            themeToggle: "Մուգ/Լուսավոր ռեժիմ",
            changePassword: "Փոխել գաղտնաբառը",
            logout: "Դուրս գալ"
        },
        hero: {
            welcomeUser: "Բարի գալուստ",
            dashboardType: "Վահանակի Տեսակը"
        },
        bookings: {
            recent: "Վերջին Ամրագրումները",
            viewAll: "Դիտել բոլորը"
        },
        modal: {
            common: {
                cancel: "Չեղարկել",
                close: "Փակել"
            },
            reject: {
                title: "Մերժել Ամրագրումը",
                reason: "Մերժման պատճառ",
                btn: "Մերժել"
            },
            cancel: {
                title: "Չեղարկել Ամրագրումը",
                reason: "Պատճառ",
                btn: "Չեղարկել Ամրագրումը"
            }
        },
        notifications: {
            title: "Ծանուցումներ",
            none: "Ծանուցումներ չկան",
            markAllRead: "Նշել բոլորը որպես կարդացված"
        },
        footer: {
            copyright: "© 2025 - MetaClass Համալսարանի Ամրագրումների Համակարգ",
            poweredBy: "Ստեղծվել է MetaClass Technology-ի կողմից"
        }
    }
};
