// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "BadgeCount",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "BadgeCount",
            targets: ["BadgePlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "BadgePlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/BadgePlugin"),
        .testTarget(
            name: "BadgePluginTests",
            dependencies: ["BadgePlugin"],
            path: "ios/Tests/BadgePluginTests")
    ]
)